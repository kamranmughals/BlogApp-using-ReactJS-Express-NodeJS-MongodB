import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b-4 bg- bg-red-600 text-center top-0 border-red-700 font-bold w-full text-lg text-white">
      <ul>
        <li className="inline-block py-4">
          <Link to="/" className="pl-6 pr-4">
            Home
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/about" className="pl-6 pr-4">
            About
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/articles-list" className="pl-6 pr-4">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
