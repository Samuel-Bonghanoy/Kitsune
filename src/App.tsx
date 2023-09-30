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
        path: "/user/:userId",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
