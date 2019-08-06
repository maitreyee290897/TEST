import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class DeleteMovie extends React.Component{
    constructor(){
        super();
        this.state={
            movie:[],
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        Axios.delete('http://localhost:8000/api/movies/'+id).then(res=>{
            this.setState({movie:res.data.data[0]})
        })
    }
    render(){
        console.log(this.state.movie)
        return(
            <div>
                 <h1>Deleted successfully</h1>
                 <Link className="btn-btn-primary" to="/Movie">Back</Link>
            </div>
           
        )
    }
}