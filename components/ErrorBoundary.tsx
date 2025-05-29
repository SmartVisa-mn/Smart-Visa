import { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function FallbackComponent() {
  return (
    <div className="p-4 bg-red-100 text-red-800">
      Ошибка: что-то пошло не так.
    </div>
  );
}

export default function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ReactErrorBoundary>
  );
}
