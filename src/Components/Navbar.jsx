import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa6";
import logo from "./../../public/vite.png";
import useAuth from "../Hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const initialTheme = localStorage.getItem("theme") || "nord";
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("sunset");
    } else {
      setTheme("nord");
    }
  };
  return (
    <div className="navbar bg-base-100 container mx-auto px-5 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-xs btn-ghost lg:hidden"
          >
            <FaAlignLeft />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all">All Services</NavLink>
            </li>
            {user && (
              <li>
                <details>
                  <summary>Dashboard</summary>
                  <ul className="p-2" style={{ width: "160px" }}>
                    {" "}
                    <li>
                      <NavLink to="/add">Add Service</NavLink>
                    </li>
                    <li>
                      <NavLink to="/manage">Manage Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/book">Book Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/todo">Service-To-Do</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            )}
          </ul>
        </div>
        <NavLink to="/" className="sm:text-xl font-extrabold btn btn-ghost">
          <img className="w-10 rounded-full" src={logo} alt="logo" /> Mastaar
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all">All Services</NavLink>
          </li>
          {user && (
            <li>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2" style={{ width: "160px" }}>
                  {" "}
                  <li>
                    <NavLink to="/add">Add Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/manage">Manage Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/book">Book Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/todo">Service-To-Do</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <>
            <input
              onChange={handleTheme}
              type="checkbox"
              className="toggle toggle-xs sm:toggle-sm mr-3"
              checked={theme === "sunset"}
            />
            <Link
              to="/login"
              className="btn btn-sm bg-blue-400 hover:bg-blue-500 text-gray-700"
            >
              Login
            </Link>
          </>
        )}
        {user && (
          <>
            <input
              onChange={handleTheme}
              type="checkbox"
              className="toggle toggle-xs sm:toggle-sm mr-3"
              checked={theme === "sunset"}
            />
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-6 sm:w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>
                <li onClick={logOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
