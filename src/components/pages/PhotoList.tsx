import { Pagination, Table, Image } from "antd";
import { ColumnsType } from "antd/es/table";
import { useFetchData } from "../../hooks/useFetchData";

// function Xyz(a: number, b: number){
//   const counter = useState(1)
//   return a+ b
// }

export const PhotoList = () => {
  /*
    1. Component React
    2. Level Asli
    3. Custom Hook
  */

  const { loading, data, setPage, total } = useFetchData("photos");

  const columns: ColumnsType<any> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "thumbnail",
      dataIndex: "thumbnailUrl",
      key: "thumbnailUrl",
      render: (thumbnailUrl: string) => <Image src={thumbnailUrl} />,
    },
  ];
  return (
    <>
      <div>PhotoList</div>
      <Pagination
        defaultCurrent={1}
        total={total}
        onChange={(page) => setPage(page)}
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
