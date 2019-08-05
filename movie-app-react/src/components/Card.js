import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Card extends Component {

    constructor(){
        super();
        
        // this.details = this.details.bind(this);
    }
    // details(){
    //     console.log(this);
    //     console.log('Came inside the click event handler');
    // }
    render(){
        return  (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title.toUpperCase()}</h5>
                    <p className="card-text">{this.props.body}</p>
                <Link className="btn-btn-primary" to={`/movies/${this.props.id}`}>Details</Link><br/>
                <Link className="btn-btn-primary" to={`/movies/delete/${this.props.id}`}>Delete</Link><br/>
                </div>
                </div>
        );
    }
}