import { Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";

export const PostList = () => {
  const [posts, setPosts] = useState<any>([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  /*
        Ajax
            fetch
            axios / $.post jquery            
            reactQuery
            queryRTK
    */

  //life-cycle hook
  //   useEffect(() => {
  //     //body effect

  //     return () => {
  //       //clean-up
  //     }
  //   }, [third]) //dependency

  console.log("hi");
  useEffect(() => {
    //Promise
    // fetch("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // async/await

    async function loadData() {
      setLoading(true);
      const resp = await fetch(
        `https://jsonplaceholder.ir/posts?_limit=10&_page=${page}`
      );
      const json = await resp.json();

      //   setTotal(parseInt(resp.headers.get('X-Total-Count') || '0'));
      setLoading(false);
      setTotal(+(resp.headers.get("X-Total-Count") || "0"));
      setPosts(json);
    }
    loadData();

    //IIFE

    return () => {
      console.log("👋👋👋👋");
    };
  }, [page]); //dependency

  const columns: ColumnsType<any> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
  ];
  return (
    <>
      <div>PostList</div>
      <Pagination
        defaultCurrent={1}
        total={total}
        onChange={(page) => setPage(page)}
      />
      <Table
        columns={columns}
        dataSource={posts}
        pagination={false}
        loading={loading}
      />
    </>
  );
};
