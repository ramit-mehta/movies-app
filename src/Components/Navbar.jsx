import React from "react";

const Navbar = () => {
  return (
    <section className="bg-dark">
      <div className="container py-3">
        <div className=" d-flex align-items-center justify-content-between">
          <h2 className="text-white mb-0">Movies App</h2>
          <h3 className="text-white mb-0">Favourites</h3>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
