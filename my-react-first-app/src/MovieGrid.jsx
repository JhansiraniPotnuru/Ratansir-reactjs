import MovieCard from './MovieCard';

const MovieGrid = () => {
  const movies = [
    { id: 1, title: 'Dongala bandi', year: 2006, genre: 'comedy' },
    { id: 2, title: 'Maghadeera', year: 2010, genre: 'Action' },
    { id: 3, title: 'Sandram', year: 2014, genre: 'Adventure' },
    { id: 4, title: 'Kanchana', year: 2019, genre: 'Thriller' },
    { id: 5, title: 'Pushpa', year: 2019, genre: 'Action' },
  ];

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;