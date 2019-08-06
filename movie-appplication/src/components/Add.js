import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class Add extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            genre:'',
            hero:'',
            heroine:'',
          
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      handleSubmit(){
          console.log(this.state.name)
          let movie={
              name:this.state.name,
         
              genre:this.state.genre,
              
              Stars:{
                    hero:this.state.hero,
                    heroine:this.state.heroine
              }
          }
          console.log(movie);
          Axios.post("http://localhost:8000/api/movies",movie).then(res=>{console.log(res.data)})
      }

    render(){
        return(
            <div>
                 <h1>Add movie</h1>
                 <form onSubmit={this.handleSubmit}>
                 <h4>Name : <input type="text" name="name" value={this.state.name} 
                            onChange={this.handleInputChange}></input></h4>
            
                 <h4>Genre : <input type="text" name="genre" value={this.state.genre} 
                                onChange={this.handleInputChange}></input></h4>
               
            
                 <h4>Hero : <input type="text" name="hero" value={this.state.hero}
                                onChange={this.handleInputChange}></input></h4>
                 <h4>Heroine : <input type="text" name="heroine" value={this.state.heroine}
                                onChange={this.handleInputChange}></input></h4>
                 <input type="submit" name="submit" value="SUBMIT"></input>
                 <input type="reset" name="reset" value="RESET"></input>

                 </form>
                 <Link className="btn-btn-primary" to="/Movie">Back</Link>
            </div>
           
        )
    }
}