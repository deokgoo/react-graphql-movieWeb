import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import Movie from '../components/Movie';

const GET_MOVIES = gql`
  {
    ranking {
      id
      original_title
      poster_path
    }
  }
`;

const Container = styled.div`
  height: auto;
  background-color: black;
`
const Header = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  grid-gap: 2em;
  padding: 16px;
  color: white;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 60px;
`

const Subtitle = styled.h3`
  font-size: 35px;
`

const Loading = styled.h3`
  font-size: 35px;
`

const Present = styled.h5`
  font-size: 12px;
  margin-top: 10px;
`;

const PosterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px 16px;
  justify-content: center;
  justify-items: start;
  grid-gap: 10px;
  overflow: auto; 
  align-items: center;
`

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo 2020</Title>
        <Subtitle>Movie Ranking Web</Subtitle>
        <Present>present deok9</Present>
      </Header>
      <PosterBox>
        testHome
        {loading && <Loading>Loading...</Loading>}
        {!loading && data.ranking && data.ranking.map(m => <Movie key={m.id} {...m} />)}
      </PosterBox>
    </Container>
  )
}
