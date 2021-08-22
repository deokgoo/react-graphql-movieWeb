import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`;

const Movie = ({ id, original_title: title, poster_path: poster}) => {
  return (
    <Image>
      <img src={poster} height="100%" alt={title}></img>
    </Image>
  );
}

export default Movie;
