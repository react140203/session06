import axios from "axios";
import { useEffect, useState } from "react";
import { appApi } from "../utils/appApi";
import { useAppSelector } from "../redux/hooks";

export const useFetchData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      const resp = await appApi.get(
        `${endpoint}?_limit=${pageSize}&_page=${page}`
      );

      setLoading(false);
      setTotal(+(resp.headers["X-Total-Count"] || "0"));
      setData(resp.data);
    })();
  }, [endpoint, page, pageSize]);

  return { page, setPage, total, data, loading, setPageSize };
};
