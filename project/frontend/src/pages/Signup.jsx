import { useState } from "react";
import axios from "axios";
function Signup() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/users/register", {
        email,
        password,
      });

      return res.data;
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center bg-white p-6 rounded shadow"
      >
        <div className="flex flex-col">
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
        <button className="py-2 bg-red-400 px-3">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
