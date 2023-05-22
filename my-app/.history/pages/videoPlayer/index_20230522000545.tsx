import React, { useState, useEffect } from 'react';
import { useMovies } from '../../';
import { Card, Input, Modal, Button } from 'antd';
import styles from './movieDetails.module.css';
const MoviesDetails = () => {
  const { getMovie, movies } = useMovies();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    getMovie();
  }, []);
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setSelectedMovie(null);
    setModalVisible(false);
  };
  const playMovie = () => {
    const movieUrl = 'https://go.wootly.ch/dash?source=web&id=becdceed471cd82d7dcc683ee2c1a61782e36745&sig=CxeADMEYJskU_kpTjr1M-w&expire=1684670571&ofs=11&usr=175838';
    window.open(movieUrl, '_blank');
  };
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <div className={styles.searchBox}>
        <Input
          className={styles.searchInput}
          placeholder="Search movies by title"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </div>
      <div className={styles.moviesContainer}>
        {filteredMovies.map((movie) => (
          <Card
            key={movie.id}
            className={styles.movieItem}
            cover={<img src={movie.picture} alt={movie.title} />}
            onClick={() => handleMovieClick(movie)}
          >
            <Card.Meta title={movie.title} />
          </Card>
        ))}
      </div>
      {selectedMovie && (
        <Modal
          visible={modalVisible}
          onCancel={handleModalClose}
          footer={[
            <Button key="trailer" type="primary" onClick={() => window.open(selectedMovie.trailer, '_blank')}>
              Watch Trailer
            </Button>,
            <Button key="movie" type="primary" onClick={playMovie}>
              Play Movie
            </Button>,
          ]}
        >
          <div>
            <img src={selectedMovie.picture} alt={selectedMovie.title} />
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};
export default MoviesDetails;