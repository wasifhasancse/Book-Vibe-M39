import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 text-emerald-600"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedBooks"
          className={({ isActive }) =>
            `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 text-emerald-600"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pagesToRead"
          className={({ isActive }) =>
            `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-emerald-50 text-emerald-600"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="navbar container mx-auto px-3 py-2 sm:px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-100 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-2xl border border-slate-200 bg-white p-2 text-slate-700 shadow-lg z-10 mt-3 w-56"
            >
              {navItems}
            </ul>
          </div>
          <a className="ml-2 bg-linear-to-r from-emerald-600 to-cyan-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent sm:text-2xl">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal rounded-full border border-slate-200 bg-white/80 px-2 py-1 gap-2 shadow-sm">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end gap-2 sm:gap-3">
          <button className="rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-100 hover:shadow-md">
            Sign In
          </button>
          <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-700 hover:shadow-md">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
