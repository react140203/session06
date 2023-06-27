import { Button, Checkbox, Form, Input, Layout } from "antd";

export const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <>
      <Layout>
        <Layout.Content style={{ minHeight: "500px", textAlign: "center" }}>
          <Form
            name="basic"
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            autoComplete="off"
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
                Login
              </Button>
            </Form.Item>
          </Form>
        </Layout.Content>
      </Layout>
    </>
  );
};
