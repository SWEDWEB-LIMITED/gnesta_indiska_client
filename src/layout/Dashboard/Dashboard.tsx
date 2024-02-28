import { FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#ffaa36] rounded-xl lg:rounded-none">
      <div className="container mx-auto p-5">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Page content here */}
            <div
              style={{ boxShadow: "0px 4px 10px 5px rgba(167,167,167,0.3)" }}
              className="p-5 rounded-xl flex justify-end lg:hidden"
            >
              <label
                htmlFor="my-drawer-2"
                className="btn btn-outline drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div
              style={{ boxShadow: "0px 4px 10px 5px rgba(167,167,167,0.3)" }}
              className="p-4 mt-12 lg:mt-0 rounded-xl min-h-screen"
            >
              <Outlet></Outlet>
            </div>
          </div>
          <div
            style={{ boxShadow: "0px 4px 10px 5px rgba(167,167,167,0.3)" }}
            className="drawer-side mr-5 rounded-xl"
          >
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu space-y-2 p-4 w-64 min-h-full bg-[#ffaa36]">
              {/* Sidebar content here */}
              <li>
                <NavLink to="/dashboard/addMenuItems">
                  <FaUtensils></FaUtensils>
                  Add Menu Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageMenuItems">
                  <FaUtensils></FaUtensils>
                  Manage Menu Items
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
