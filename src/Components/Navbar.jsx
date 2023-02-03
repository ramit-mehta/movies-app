import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-dark">
      <div className="container py-3">
        <div className=" d-flex align-items-center justify-content-between">
          <Link to="/">
            <h2 className="text-white mb-0">Movies App</h2>
          </Link>
          <Link to="/Favourites">
            <h3 className="text-white mb-0">Favourites</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
