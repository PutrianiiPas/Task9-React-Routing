import { useParams } from "react-router-dom";
import movies from "../data/movies";

function MovieDetail() {
  const { id } = useParams();

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return <h1>Movie Not Found</h1>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Genre: {movie.genre}</p>
    </div>
  );
}

export default MovieDetail;