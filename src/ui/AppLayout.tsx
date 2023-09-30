import MainHeader from "../features/posts/MainHeader";
import Aside from "./Aside";
import Navbar from "./Navbar";

import { Outlet, useNavigation } from "react-router-dom";

export default function AppLayout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <div className="grid">
      <Navbar />
      <main className="main-section">
        <MainHeader />
        <Outlet />
      </main>
      <Aside />
    </div>
  );
}
