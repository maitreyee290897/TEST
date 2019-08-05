import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class MovieDetails extends React.Component{
    constructor(){
        super();
        this.state={
            movie:[],
            stars:[]
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        //let id1=parseInt(id)
        console.log(id);
        Axios.get('http://localhost:8000/api/movies/'+id).then(res=>{
            this.setState({movie:res.data.data[0],
            stars:res.data.data[0].Stars})
        })
      //  console.log(this.state.user)
    }
    render(){
        console.log(this.state.movie.Stars)
        console.log(this.state.stars.hero)
        return(
            <div>
                 <h1>Movie details</h1>
                 <h4>Name : {this.state.movie.name}</h4>
                 <h4>Genre : {this.state.movie.genre}</h4>
                 <h3 >Cast</h3>
                 <h4>Hero : {this.state.stars.hero}</h4>
                 <h4>Heroine : {this.state.stars.heroine}</h4>
                 <Link className="btn-btn-primary" to="/Movie">Back</Link>
            </div>
           
        )
    }
}