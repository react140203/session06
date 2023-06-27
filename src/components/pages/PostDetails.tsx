import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostModel } from "./PostList";
import Descriptions from "antd/es/descriptions";
import { Button } from "antd";
import { Header } from "../Header";
import axios from "axios";
import { appApi } from "../../utils/appApi";

export const PostDetails = () => {
  const params = useParams();
  const [model, setModel] = useState<PostModel>();
  const navigate = useNavigate();
  useEffect(() => {
    //
    (async () => {
      const resp = await appApi.get(`posts/${params.id}`);
      setModel(resp.data);
    })();
  }, [params]);

  return (
    <>
      <Header title="Post Details"></Header>
      <Descriptions title="Post Info" bordered>
        <Descriptions.Item label="Id">{model?.id}</Descriptions.Item>
        <Descriptions.Item label="User Id">{model?.userId}</Descriptions.Item>
        <Descriptions.Item label="Title">{model?.title}</Descriptions.Item>
        <Descriptions.Item label="Body">{model?.body}</Descriptions.Item>
      </Descriptions>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </>
  );
};
