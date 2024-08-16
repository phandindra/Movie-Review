import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList'; 
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieDetails = await fetch('https://www.omdbapi.com/?s=batman&apikey=7df6570b');
        const response = await movieDetails.json();

        if (response.Search) {
          setMovies(response.Search);
        } else {
          console.error('No movies found');
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/moviedetails/:id" element={<MovieDetails movies={movies} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
