import React from 'react';
import Card from './Card';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Movies extends React.Component {

    constructor(){
        super();
        this.selectedMovie=this.selectedMovie.bind(this);
        this.state={
           movieList:[]
        }
    }
    
    selectedMovie(data){
        console.log(data)
        let movieList = this.state.movies.filter(movie=>{if(movie.id===data){return true}return false})
        console.log(movieList)
    }
    componentDidMount(){
        console.log("component is mounted on the dom ");

     axios.get('http://localhost:8000/api/movies').then(res=>{
               this.setState({movieList:res.data.data})})

    }
   render(){
    
    return (
        
            <div>
            <div>
            <Link className="btn-btn-primary" to="/add/movies">Add movie</Link>
            </div>
            <div className="row">
            
            {
                
            this.state.movieList.map((movie,id)=> <Card key={movie.id} title={movie.name} body={movie.description} 
                                 id={movie._id}       selected={this.selectedMovie}></Card>) 
            }
           </div>
           </div>
    );
        }
}