import { Button, Form, Input, Layout } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "./auth.slice";

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector((s) => s.auth);
  useEffect(() => {
    if (auth.token) {
      navigate("/");
    }
  }, [auth]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(register({ email: values.email, password: values.password }));
  };

  return (
    <>
      <Layout>
        <Layout.Content style={{ minHeight: "500px", textAlign: "center" }}>
          <Form
            name="basic"
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            // autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Layout.Content>
      </Layout>
    </>
  );
};
