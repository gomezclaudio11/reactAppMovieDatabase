import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Resultados = () => {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get("keyword");
    const [movieResults, setMovieResults] = useState([])

    useEffect(()=> {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=e1996ef404e1f29529d30933e56c3a8a&language=es-ES&query=${keyword}`;
        axios
          .get(endPoint)
          .then((response) => {
            const moviesArray = response.data.results;
            if(moviesArray.length === 0){
                const notify = () => toast('Tu busqueda no arrojo resultados', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    notify()
            };
            setMovieResults(moviesArray);
            
          })
          .catch((error) => {
            console.log(error);
          });
    },[keyword])
    return (
        <>
      <div className='row my-4'>
    {
        movieResults.map((oneMovie, idx) => {
            return(
                <div className='col-3 ' key={idx}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} />
            <Card.Body>
                <Card.Title>{oneMovie.title}</Card.Title>
                <Card.Text>{oneMovie.overview}</Card.Text>
                <Link to={`/detalle?movieId=${oneMovie.id}`}  className="btn btn-primary">Ver detalle</Link>
            </Card.Body>
        </Card>
        </div>
            )
        })
    }       
    </div>
    </>
    );
}

export default Resultados;
