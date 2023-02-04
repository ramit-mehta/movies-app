import React from "react";
import { CartState } from "./DataContext";
import Navbar from "./Navbar";

const Favourites = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <>
      <Navbar />
      <section className="mt-5">
        <div className="container">
          {cart.map((get) => {
            return <img src={get.poster} alt="image" />;
          })}
        </div>
      </section>
    </>
  );
};

export default Favourites;
