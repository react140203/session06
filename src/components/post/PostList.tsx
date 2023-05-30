import React, { useEffect, useState } from "react";

export const PostList = () => {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState<any>([]);
  const [total, setTotal] = useState(1);
  const [page, setPage] = useState(1);
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
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const json = await resp.json();

      //   setTotal(parseInt(resp.headers.get('X-Total-Count') || '0'));
      setTotal(+(resp.headers.get("X-Total-Count") || "0"));
      setPosts(json);
    }
    loadData();

    //IIFE

    return () => {
      console.log("👋👋👋👋");
    };
  }, [page]); //dependency

  return (
    <>
      <div>PostList</div>
      posts: {posts.length}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => setPage(1)} href="#">
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" onClick={() => setPage(2)} href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <table className="table table-striped">
        <thead>
          <th>id</th>
          <th>userId</th>
          <th>title</th>
          <th>body</th>
        </thead>
        <tbody>
          {posts.map((post: any) => (
            <tr>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title.substring(0, 20)} ...</td>
              <td>{post.body.substring(0, 20)} ...</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </>
  );
};
