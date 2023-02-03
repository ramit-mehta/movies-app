import React from "react";
import { myContext } from "./DataContext";

const getMovies = (props) => {
  const movieArr = [
    {
      id: 1,
      title: "Star Wars: The Last Jedi",
      year: 2017,
      genre: "Action, Adventure",
      plot: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers.",
      poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    },
    {
      id: 2,
      title: "Black Swan",
      year: 2010,
      genre: "Drama, Thriller",
      plot: 'A committed dancer wins the lead role in a production of Tchaikovskys "Swan Lake" only to find herself struggling to maintain her sanity.',
      poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg",
    },
    {
      id: 3,
      title: "Fight Club",
      year: 1999,
      genre: "Drama",
      plot: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming a fight club.",
      poster: "https://m.media-amazon.com/images/I/71o1aRN1FJL._SL1100_.jpg",
    },
    {
      id: 4,
      title: "The Godfather: Part II",
      year: 1974,
      genre: "Crime, Drama",
      plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: 5,
      title: "The Lucy",
      year: 2014,
      genre: "Science Fiction",
      plot: "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMzUyOWNjZGMtMzAxYS00YTczLWEwMzgtNGE2NDc2MWE0MGE4XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
    },
    {
      id: 6,
      title: "The Walking Dead",
      year: 2010,
      genre: "Horror, Drama",
      plot: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
      poster:
        "https://resizing.flixster.com/66psDQSF-fJ0KX_en4176VerbAI=/300x300/v2/https://flxt.tmsimg.com/assets/p20172644_b_v13_af.jpg",
    },
    {
      id: 7,
      title: "The Deep Blue Sea III",
      year: 2022,
      genre: "Action, Adventure",
      plot: "Searching for a cure to Alzheimer's disease, a group of scientists on an isolated research facility become the prey.",
      poster:
        " https://cdn.cinematerial.com/p/297x/1w1arawz/deep-blue-sea-3-movie-poster-md.jpg?v=1596088922",
    },
    {
      id: 8,
      title: "Harry Potter the Prisoner of Azkaban",
      year: 2004,
      genre: "Adventure, Fantasy",
      plot: "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study.",
      poster:
        "https://c8.alamy.com/comp/2C7GK8C/harry-potter-and-the-prisoner-of-azkaban-movie-poster-2C7GK8C.jpg",
    },
  ];

  return (
    <myContext.Provider value={movieArr}>{props.children}</myContext.Provider>
  );
};

export default getMovies;
