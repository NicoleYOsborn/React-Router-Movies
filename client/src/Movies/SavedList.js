import React from 'react';
import {Link} from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movies => (
      <span className="saved-movie">{movies.title}</span>
    ))}
    <Link to='/' className="home-button">Home</Link>
    
  </div>
);

export default SavedList;
