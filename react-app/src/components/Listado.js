import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'react-bootstrap';


const Listado = ({onClick}) => {
    const [movieList, setMovieList] = useState([])
    
    useEffect (()=> {
        const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=e1996ef404e1f29529d30933e56c3a8a&language=es-ES=page=1"
        axios.get(endPoint)
            .then(response => {
                const apiData = response.data;
                setMovieList(apiData.results);                
        })  
        .catch(error => {
            toast('Error de carga', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            console.log(error)            
        });
        
    },[setMovieList])

    console.log(movieList);
    
    let token = sessionStorage.getItem("token");
    const navigate = useNavigate();  
        if (token === null) {
            navigate("/")
        }
        console.log(token);
   
  return (
    <>
      <Container fluid className="row my-4 ">
        {movieList.map((oneMovie, idx) => {
          return (
            <Row className='col-4 ' key={idx}>
              <Col className='p-2 flex-fill sm'>
                <Card className="justify-content-md-center" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  />
                  <Card.Body >
                    <Card.Title>
                      {oneMovie.title}{" "}
                    </Card.Title>
                    <Card.Text>
                      {oneMovie.overview}
                    </Card.Text>
                    <Link
                      to={`/detalle?movieId=${oneMovie.id}`}
                      className="btn btn-primary"
                    >
                      Ver detalle
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}

export default Listado