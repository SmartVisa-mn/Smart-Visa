import useSWRInfinite from "swr/infinite";
import { fetcher } from "../../utils/api";
import Link from "next/link";

const PAGE_SIZE = 20;
const getKey = (pageIndex: number, previousPage: any) =>
  previousPage && !previousPage.nextCursor
    ? null
    : `/api/admin/applications?cursor=${
        previousPage?.nextCursor || 0
      }&limit=${PAGE_SIZE}`;

export default function Applications() {
  const { data, size, setSize, mutate, error } = useSWRInfinite(
    getKey,
    fetcher
  );
  const applications = data ? data.flatMap((page) => page.items) : [];

  if (error) return <p>Failed to load</p>;
  if (!data) return <p>Loading…</p>;

  const loadMore = () => setSize(size + 1);

  const approve = async (id: string) => {
    mutate(
      (pages) =>
        pages.map((page) => ({
          ...page,
          items: page.items.map((app) =>
            app.id === id ? { ...app, status: "approved" } : app
          ),
        })),
      false
    );
    await fetch(`/api/admin/applications/${id}/approve`, { method: "POST" });
    mutate();
  };

  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>/* headers */</thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.name}</td>
              <td>{app.country}</td>
              <td>{app.status}</td>
              <td>
                <button onClick={() => approve(app.id)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={loadMore} className="mt-4">
        Load More
      </button>
    </div>
  );
}
