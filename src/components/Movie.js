import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Image = styled.div`
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`;

export default ({ id, original_title: title, poster_path: poster}) => {
  return (
    <Image>
      <img src={poster} height="100%"></img>
    </Image>
  );
}