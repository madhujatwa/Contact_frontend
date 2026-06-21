import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 w-full min-h-screen bg-gray-100 p-6">
        <Outlet />
      </div>

    </div>
  );
};

export default DashboardLayout;