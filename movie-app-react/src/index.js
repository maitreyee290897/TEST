import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import DeleteMovie from './components/DeleteMovie';
import Add from './components/Add';




const router = (
    <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Movie">Movies</Link></li>
        </ul>
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/Movie" component={Movies}/>
            <Route exact path="/movies/:id" component={MovieDetails}/>
            <Route exact path="/movies/delete/:id" component={DeleteMovie}/>
            <Route exact path="/add/movies" component={Add}/>
        </div>
    </Router>
)
 
ReactDOM.render(
    router,
    document.getElementById('root'));