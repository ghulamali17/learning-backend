import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Todo from "./components/Todo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Todo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
    {
    path: "/register",
    element: <Signup/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
