import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const[movieList, setMovieList] = useState([]);

  // const addToSavedList = movie => {
  //   setSavedList([...savedList, movie]);
  // };

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return (
    <Router>
      <SavedList list={savedList} />
      <Route exact path='/'>
        <MovieList movie={movieList}/>
      </Route> 
      
      <Route path='/movie/:id' >
        <Movie/>
      </Route>
    </Router>
  );
};

export default App;
