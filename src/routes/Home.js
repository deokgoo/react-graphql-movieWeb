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
  height: 100px;
  display: flex;
  flex-direction: column;
  grid-gap: 2em;
  padding: 16px;
  color: white;
  font-weight: bold;
  align-items: center;
  justify-content: center;
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

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(loading, data);
  return (
    <Container>
      <Header>
        <Subtitle>Movie Ranking Web</Subtitle>
        <Present>present deok9</Present>
      </Header>
      <PosterBox>
        {loading && <Loading>Loading...</Loading>}
        {!loading && data?.ranking?.map((m, idx) => <Movie key={m.id} {...m} idx={idx} />)}
      </PosterBox>
    </Container>
  )
}

export default Home;
