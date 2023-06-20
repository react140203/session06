import { Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useFetchData } from "../../hooks/useFetchData";
import { PhotoModel } from "./PhotoList";

// function Xyz(a: number, b: number){
//   const counter = useState(1)
//   return a+ b
// }
export interface PostModel {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export const PostList = () => {
  /*
    1. Component React
    2. Level Asli
    3. Custom Hook
  */

  const { loading, data, setPage, total, setPageSize } =
    useFetchData<PhotoModel>("posts");

  const columns: ColumnsType<PostModel> = [
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
        onChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
      />
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={false}
        loading={loading}
      />
    </>
  );
};
