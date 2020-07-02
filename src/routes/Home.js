import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`

export default () => {
  const { loading } = useQuery(GET_MOVIES);
  console.log(loading);
  return <h1>home</h1>
}
