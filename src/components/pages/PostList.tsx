import { Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useFetchData } from "../../hooks/useFetchData";

// function Xyz(a: number, b: number){
//   const counter = useState(1)
//   return a+ b
// }

export const PostList = () => {
  /*
    1. Component React
    2. Level Asli
    3. Custom Hook
  */

  const { loading, data, setPage, total } = useFetchData("posts");

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
        onChange={(page, pageSize) => setPage(page)}
      />
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        loading={loading}
      />
    </>
  );
};
