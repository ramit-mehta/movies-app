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
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {cart.map((get) => {
              return (
                <>
                  <div className="col-3 mt-4">
                    <img className="w-100" src={get.poster} alt="image" />
                  </div>
                  <div className="col-8">
                    <h2>{get.title}</h2>
                    <div className="d-flex">
                      <h4>{get.year}</h4>
                      <h4 className="ms-4">
                        <em>{get.genre}</em>
                      </h4>
                    </div>
                    <h6 className="mt-1">{get.plot}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Favourites;
