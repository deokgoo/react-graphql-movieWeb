import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_MOVIES_FROM_ID = gql`
  query searchById($id: Int!){
    searchById(id: $id) {
      id
      original_title
      poster_path
    }
  }
`

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIES_FROM_ID, {
    variables: { id: parseInt(id) }
  });
  return (
    <>
      {loading && <h1>loading...</h1>}
      {!loading && data && console.log(data.searchById)}
    </>
  )
};

export default Detail;
