import { useState } from "react";
import { Link } from "react-router-dom";
import moviesData from "../data/movies";

function Movies() {
    const [movies, setMovies] = useState(moviesData);

    const deleteMovie = (id) => {
        const filtered = movies.filter((movie) => movie.id !== id);
        setMovies(filtered);
    };

    return (
            <div>
        <h1>Movies Page</h1>

        {movies.map((movie) => (
            <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>

            <Link to={`/movies/${movie.id}`}>
                Detail
            </Link>

            <button onClick={() => deleteMovie(movie.id)}>
                Delete
            </button>
            </div>
        ))}
        </div>
    );
}

export default Movies;