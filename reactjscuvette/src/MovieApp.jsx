import { useState, useEffect } from "react";
import "./MovieApp.css";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/movies");
        const data = await response.json();
        setMovies(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies", error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);
  console.log(movies);

  if (loading) {
    return <div>Loading......</div>;

  }

  return (
    <>
      {movies ? (
        <>
          <h1>{!movies ? "Movies List" : "Bye"}</h1>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {movies.map((movie) => (
              <li
                style={{
                  width: "200px",
                  height: "150px",
                  backgroundColor: "magenta",
                  border: "1px solid black",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
                key={movie.id}
              >
                <h2>{movie.movie}</h2>
                <span>{movie.rating}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <> Please try again</>
      )}
    </>
  );
};

export default MovieApp;
