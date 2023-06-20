import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { PhotoList } from "./pages/PhotoList";
import { PostList } from "./pages/PostList";

const { Header, Sider, Content } = Layout;

export const AppLayout = ({ children }: any) => {
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
          defaultSelectedKeys={["1"]}
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
              path="/"
              element={
                <>
                  <h1>Home</h1>
                </>
              }
            />
            <Route path="/photos" element={<PhotoList></PhotoList>} />
            <Route path="/posts" element={<PostList></PostList>} />
            {/* 
            <SelectColor />
            
            
            <Counter />
            <TaskList></TaskList> */}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
