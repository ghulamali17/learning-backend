import React from "react";
import axios from "axios";
import {
  Button,
  Input,
  Form,
  Checkbox,
  Typography,
  Card,
  message,
} from "antd";
import 'antd/dist/reset.css';

const { Title, Text, Link } = Typography;

function Login() {
  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const res = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });

      const token = res.data.token;

      if (token) {
        localStorage.setItem("token", token);
        const user = res.data.user;
        localStorage.setItem("user", JSON.stringify(user));

        message.success(`Welcome ${user.name}`);
      } else {
        message.error("Login failed: No token received");
      }
    } catch (err) {
      console.error(err);
      message.error(err.response?.data?.error || "Login failed");
    }
  };

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //     backgroundColor: "#f0f2f5",
    //   }}
    // >
    //   <Card
    //     style={{ width: 400, borderRadius: 8 }}
    //     bodyStyle={{ padding: 30 }}
    //     bordered={false}
    //   >
    //     <Title level={2} style={{ textAlign: "center", marginBottom: 30 }}>
    //       Login
    //     </Title>
    //     <Form
    //       layout="vertical"
    //       onFinish={handleSubmit}
    //       initialValues={{ remember: true }}
    //     >
    //       <Form.Item
    //         label="Email"
    //         name="email"
    //         rules={[
    //           { required: true, message: "Please enter your email!" },
    //           { type: "email", message: "Please enter a valid email!" },
    //         ]}
    //       >
    //         <Input placeholder="Enter your email" />
    //       </Form.Item>

    //       <Form.Item
    //         label="Password"
    //         name="password"
    //         rules={[{ required: true, message: "Please enter your password!" }]}
    //       >
    //         <Input.Password placeholder="Enter your password" />
    //       </Form.Item>

    //       <Form.Item name="remember" valuePropName="checked">
    //         <Checkbox>Remember me</Checkbox>
    //       </Form.Item>

    //       <Form.Item>
    //         <Button type="primary" htmlType="submit" block>
    //           Login
    //         </Button>
    //       </Form.Item>

    //       <Form.Item style={{ textAlign: "center", marginBottom: 0 }}>
    //         <Link href="#">Forgot password?</Link>
    //       </Form.Item>
    //     </Form>
    //   </Card>
    // </div>

    <div className="flex items-center justify-center min-h-screen">
       <Card
        style={{ width: 400, borderRadius: 8 }} 
      >
       <Title level={2} className="text-center mb-20">
      Login
       </Title>
       <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="email" rules={
            [
                {required: true, message: "required"}
            ]
        }>
          <Input placeholder="Enter your email" />
        </Form.Item>
         <Form.Item label="password" rules={
            [
                {required: true, message: "required"}
            ]
        }>
          <Input.Password placeholder="Password is required" />
        </Form.Item>
         <Form.Item>
           <Button type="primary" htmlType="submit" block>
             Login
           </Button>
          </Form.Item>

       </Form>
       
    </Card>
    </div>
  );
}

export default Login;
