import React, { Component} from 'react';
import {getMovies} from './services/fakeMovieService.js'
import Table from './Table';
//import axios from 'axios';
class Movie extends Component{

    state = {

        movies : getMovies()
    }
    componentDidMount(){
      fetch('http://localhost:3004/movies')
      .then(res => res.json())                  //res is alocal varaible
      .then(data => this.setState({movies:data}))  //data is a local varaible
      //.then(res => console.log(res)) 
    }

    handleDelete = (movie) => {
        //console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        console.log(movies)
        this.setState({ movies : movies})
    }


    render(){
        const {length:count} = this.state.movies  //destructing {array oda property ah destructing}

        if(count === 0)
            return <p>There is no movies in the database</p>;

         return(
            <React.Fragment>
              <Table clickMe={this.handleDelete} movies={this.state.movies}></Table>
        <div>
            <p>Showing {count} movies in the database</p>
            <table className="table">
            <thead>
    <tr>
      <th>Title</th>
      <th>Genre</th>
      <th>Stock</th>
      <th>Rate</th>
    </tr>
  </thead> 
  <tbody>{
      this.state.movies.map(movie => (
        
        <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td><button onClick={() => this.handleDelete
          (movie)} className="btn btn-danger btn-sm">Delete</button></td>
      </tr>   
        ))   
      }
  
</tbody>
</table>
           </div> 
            </React.Fragment>
       
            )
    }

}

export default  Movie;