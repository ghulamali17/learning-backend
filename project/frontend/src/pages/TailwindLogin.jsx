import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Input, Form } from 'antd';
function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

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

        alert(`Welcome ${user.name}`);
      } else {
        alert("Login failed: No token received");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Login failed");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Form
      layout="vertical"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center bg-white p-6 rounded shadow"
      >
        <div     className="flex flex-col">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-2 py-1 shadow-sm rounded"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-2 py-1 shadow-sm rounded"
            type="password"
          />
        </div>
        {/* <button className="py-2 bg-red-400 px-3">Login</button> */}
          <Button type="primary">Click Me!</Button>
      </Form>
    </div>
  );
}

export default Login;
