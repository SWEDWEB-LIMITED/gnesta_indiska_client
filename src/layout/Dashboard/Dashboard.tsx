import { FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#ffaa36]">
      <div className="flex gap-6 container mx-auto p-5">
        {/* dashboard side bar */}
        <div
          style={{ boxShadow: "0px 4px 10px 5px rgba(167,167,167,0.3)" }}
          className="w-64 rounded-lg"
        >
          <ul className="menu space-y-2">
            <li>
              <NavLink to="/dashboard/addMenuItems">
                <FaUtensils></FaUtensils>
                Add Menu Items
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div
          style={{ boxShadow: "0px 4px 10px 5px rgba(167,167,167,0.3)" }}
          className="flex-1 p-8 rounded-lg"
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
