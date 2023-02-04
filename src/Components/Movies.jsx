import React from "react";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import { CartState } from "./DataContext";
// import ButtonClick from "./ButtonClick";
import Button from "react-bootstrap/Button";

const Movies = () => {
  const {
    state: { movieArr },
    dispatch,
  } = CartState();
  return (
    <>
      <Navbar />
      <section className="pt-5 bg-light">
        <div className="container">
          <div className="row mx-auto">
            {movieArr === "" ? (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              movieArr.map((get, index) => {
                return (
                  <div key={index} className="col-lg-3 col-md-6 mb-5">
                    <Card className="w-100 bg-dark">
                      <Card.Img
                        className="w-100 poster_height"
                        variant="top"
                        src={get.poster}
                      />
                      <Card.Body>
                        <Card.Title className="text-warning">
                          {get.title}
                        </Card.Title>
                        <p className="mb-1 fw-semibold text-light">
                          {get.year}
                        </p>
                        <p className="mb-1 fw-bold text-light">
                          Genre: {get.genre}
                        </p>
                        <Card.Text className="text-light">
                          <em>{get.plot}</em>
                        </Card.Text>
                        <Button
                          onClick={() => {
                            dispatch({
                              type: "ADD_TO_FAV",
                              payload: get,
                            });
                          }}
                          className="btn btn-warning"
                        >
                          Add to favourites
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
