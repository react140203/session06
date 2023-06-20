import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { PhotoList } from "./pages/PhotoList";
import { PostList } from "./pages/PostList";
import { SelectColor } from "./SelectColor";
import { Counter } from "./Counter";
import { TaskList } from "./task/TaskList";
import { NotFound } from "./pages/NotFound";

const { Header, Sider, Content } = Layout;

export const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          onClick={(info) => navigate(info.key)}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={[
            {
              key: "/",
              icon: <UserOutlined />,
              label: "Home",
            },
            {
              key: "/posts",
              icon: <VideoCameraOutlined />,
              label: "Posts",
            },
            {
              key: "/photos",
              icon: <UploadOutlined />,
              label: "Photos",
            },
            {
              key: "/color",
              icon: <UploadOutlined />,
              label: "Color",
            },
            {
              key: "/tasks",
              icon: <UploadOutlined />,
              label: "Tasks",
            },
            {
              key: "/counter",
              icon: <UploadOutlined />,
              label: "Counter",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route
              path=""
              element={
                <>
                  <h1>Home</h1>
                </>
              }
            />
            <Route path="photos" element={<PhotoList></PhotoList>} />
            <Route path="posts" element={<PostList></PostList>} />
            <Route path="color" element={<SelectColor></SelectColor>} />
            <Route path="counter" element={<Counter></Counter>} />
            <Route path="tasks" element={<TaskList></TaskList>} />
            <Route path="404" element={<NotFound></NotFound>} />
            <Route path="*" element={<Navigate to="/404"></Navigate>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
