import { useEffect, useState } from "react";

export const useFetchData = (enpoint: string) => {
  const [posts, setPosts] = useState<any>([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const resp = await fetch(
        `https://jsonplaceholder.ir/${enpoint}?_limit=10&_page=${page}`
      );
      const json = await resp.json();

      setLoading(false);
      setTotal(+(resp.headers.get("X-Total-Count") || "0"));
      setPosts(json);
    }
    loadData();

    //IIFE
  }, [page]);

  return { page, setPage, total, posts, loading };
};
