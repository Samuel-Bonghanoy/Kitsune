import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import PostList from "./features/posts/PostList";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <PostList />,
      },
      {
        path: "/messages",
      },
      { path: "/notification" },
      {
        path: "/user",
      },
      {
        path: "/order/:orderId",
      },
      {
        path: "/user/:id",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
