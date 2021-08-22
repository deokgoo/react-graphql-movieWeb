import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const PostContainer = styled.div`
  display: flex;
  min-height: 600px;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
`

const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 12px;
`

const Image = styled.div`
  width: 80%;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`;

const Movie = ({ id, original_title: title, poster_path: poster, idx}) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [posterTrigger, setPostTrigger] = useState(false);
  const inViewHandler = () => {
    setPostTrigger(true);
  }
  return (
    <PostContainer ref={ref}>
      <Title>{idx+1}. {title}</Title>
      {`something ${inView}`}
      <Image>
        {inView && !posterTrigger ? inViewHandler():<></>}
        {posterTrigger ?
          <img src={poster} width="100%" alt={title} onChange={inViewHandler}></img> :
          <></>
        }
      </Image>
    </PostContainer>
  );
}

export default Movie;
