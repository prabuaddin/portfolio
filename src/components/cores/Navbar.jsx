import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-slate-200 fixed z-10 rounded-b-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52">
              <Link to="/">
                <li>
                Home
                </li>
              </Link>
              <Link to="/gallery">
              <li>
                Portfolio    
              </li>
              </Link>
              <Link to="/about">
                <li>
                    About
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-lg text-center lg:text-xl font-silkscreen">Prabu Addin Almuhasibi</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-neutral hidden lg:block">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
