"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

type Movie = {
map(arg0: (movie: Movie, index: number) => React.JSX.Element): React.ReactNode;
rating: number;
id: number;
judul : string;
foto: string;
}
const MovieCard = () => {
  const [movieData, setMovieData] = useState<Movie>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        setMovieData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting data: ', error);
      // Handle error
    }
  };

  return (
    <div>
      {movieData && (
        <div className="row">
          {movieData.data.map((movie: Movie, index : number) =>
            <Card key={index} style={{ width: '300px', height: '300px' }} className='col-md-4 p-2 px-4 shadow-xl'>
              <Card.Img variant='top' src={movie.foto} alt='Card Image cap' />
              <Card.Body className='bg-dark text-white'>
                <Card.Title className='font-bold text-xl'>{movie.judul}</Card.Title>
                <Card.Text>Rating: {movie.rating}</Card.Text>
                <ButtonToolbar>
                  <ButtonGroup className='d-flex justify-content-between' aria-label='first group'>
                    <Button variant='primary'>View Detail</Button>
                  </ButtonGroup>
                  <ButtonGroup aria-label='second group'>
                    <Button variant='danger' onClick={() => handleDelete(movie.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Card.Body>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
