import React, { Component } from 'react';
import { getGenres } from './services/fakeGenreService'
import { getMovies } from './services/fakeMovieService.js'
import Table from './Table';
import Pagination from './common/Pagination';
import { Paginate } from './utils/Paginate';
import ListGroup from './common/ListGroup';
import { filter } from 'lodash';


class Movie extends Component {

    state = {

        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 5 //datas into the page
    }
    componentDidMount() {

        const genres = [{ name: 'All Genres' }, ...getGenres()]

        this.setState({
            movies: getMovies(),
            //genres : getGenres()
            genres
        })
    }


    handleDelete = (movie) => {
        //console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        console.log(movies)
        this.setState({ movies: movies })
    }

    handlePageChange = (page) => {
        //console.log(page)
        this.setState({ currentPage: page })
    }
    handleGenreSelect = (genre) => {
        //console.log(genre)
        this.setState({ selectedGenre: genre,currentPage:1})
    }

    render() {
        const { length: count } = this.state.movies  //destructing {array oda property ah destructing}

        const { pageSize, currentPage, movies: allMovies, selectedGenre } = this.state

        if (count === 0)
            return <p>There is no movies in the database</p>;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;

        const movies = Paginate(filtered, currentPage, pageSize)    
        console.log(movies)

        return (

            <React.Fragment>
                <div className="row">
                    <div className="col-3">
                        <ListGroup
                            items={this.state.genres}
                            onItemSelect={this.handleGenreSelect}
                            selectedItem={this.state.selectedGenre}
                            textProperty="name"
                            valueProperty="_id"
                        />

                    </div>
                    <div className="col">
                        <p>Showing {filtered.length} movies in the database</p>
                        <Table clickMe={this.handleDelete} movies={movies}></Table>

                        <Pagination
                            itemsCount={filtered.length}
                            pageSize={pageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={currentPage}
                        />
                    </div>

                </div>
            </React.Fragment>

        )
    }

}

export default Movie;