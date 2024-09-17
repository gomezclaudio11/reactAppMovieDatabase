import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, redirect } from "react-router-dom";

const Detalle = () => {
  let token = sessionStorage.getItem("token");

  let query = new URLSearchParams(window.location.search);
  let movieId = query.get("movieId");

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e1996ef404e1f29529d30933e56c3a8a&language=es-ES`;
    axios
      .get(endPoint)
      .then((response) => {
        const movieData = response.data;
        setMovie(movieData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <>
      {!token && redirect("/")}
      {movie && (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Card.Text>Fecha de estreno: {movie.release_date}</Card.Text>
              <Card.Text>Rating: {movie.vote_average}</Card.Text>
              <Card.Text>Generos: {movie.genres.map(oneGenre => <li>{oneGenre.name}</li>)}</Card.Text>
            
              <Link
                to={`/listado`}
                className="btn btn-primary"
              >
                Volver al listado de peliculas
              </Link>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
};

export default Detalle;
