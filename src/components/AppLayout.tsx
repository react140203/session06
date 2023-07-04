import { useState, lazy, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
const { Header, Sider, Content } = Layout;

export const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const auth = useAppSelector((x) => x.auth);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const getAuthMenu = () => {
    return {
      key: auth.token ? "/logout" : "/login",
      icon: <UserOutlined />,
      label: auth.token ? "Logout" : "Login",
    };
  };

  const menu = [
    {
      key: "/",
      icon: <UserOutlined />,
      label: "Home",
    },
    getAuthMenu(),
    {
      key: "/register",
      icon: <UserOutlined />,
      label: "Register",
    },
    {
      key: "/posts",
      icon: <VideoCameraOutlined />,
      label: "Posts",
      role: "admin",
    },
    {
      key: "/photos",
      icon: <UploadOutlined />,
      label: "Photos",
      role: "admin",
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
  ];
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          onClick={(info) => navigate(info.key)}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={menu.filter((x) => !x.role || x.role === auth.role)}
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
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};
