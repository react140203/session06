import { useEffect, useState } from "react";

export const useFetchData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      const resp = await fetch(
        `https://jsonplaceholder.ir/${endpoint}?_limit=${pageSize}&_page=${page}`
      );
      const json = await resp.json();

      setLoading(false);
      setTotal(+(resp.headers.get("X-Total-Count") || "0"));
      setData(json);
    })();
  }, [endpoint, page, pageSize]);

  return { page, setPage, total, data, loading, setPageSize };
};
