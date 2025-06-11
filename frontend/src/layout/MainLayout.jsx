import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="w-full ml-64 pt-18 p-4 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
