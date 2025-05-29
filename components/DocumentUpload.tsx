import { useState } from "react";
import * as tus from "tus-js-client";

export default function DocumentUpload({
  onUpload,
}: {
  onUpload: (urls: string[]) => void;
}) {
  const [progress, setProgress] = useState(0);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const upload = new tus.Upload(file, {
        endpoint: "/api/upload/tus",
        retryDelays: [0, 1000, 3000],
        metadata: { filename: file.name, filetype: file.type },
        onError: console.error,
        onProgress: (bytesUploaded, bytesTotal) => {
          setProgress(Math.round((bytesUploaded / bytesTotal) * 100));
        },
        onSuccess: () => {
          // Construct or fetch the file URL
          const url = upload.url!;
          onUpload([url]);
        },
      });
      upload.start();
    });
  };

  return (
    <div>
      <label htmlFor="fileUpload">Select Files:</label>
      <input type="file" id="fileUpload" multiple onChange={handleFiles} />
      {progress > 0 && <p>Uploading: {progress}%</p>}
    </div>
  );
}
