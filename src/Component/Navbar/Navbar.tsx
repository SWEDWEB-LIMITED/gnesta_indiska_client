import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Hem</NavLink>
      </li>
      <li>
        <NavLink to="/booktable">Boka Bord</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Meny</NavLink>
      </li>
      <li>
        <NavLink to="/about">Om Oss</NavLink>
      </li>
    </>
  );
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="navbar justify-evenly font-bold fixed bg-black bg-opacity-40 text-white z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isDropdownOpen && (
            <ul
              onClick={closeDropdown}
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          )}
        </div>
        <Link to="/">
          <img className="max-w-[3rem]" src="logo.png" alt="" />
        </Link>
        <span className="p-2 uppercase font-bold">
          Gnesta Indiska Restaurang
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
