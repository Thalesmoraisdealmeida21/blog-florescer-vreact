import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  header {
    display: flex;
    flex-direction: column;
    width: 100%;
    img {
      max-width: 1300px;
      max-height: 600px;
      margin: auto;
    }
  }
`;

export const Post = styled.div`
  width: 300px;
  cursor: pointer;
  transition: 0.6s;
  margin: 16px;
  &:hover {
    color: #4d96ca;
  }
  img {
    height: 200px;
    width: 300px;
  }

  h1 {
    margin-top: 16px;
  }

  p {
    line-height: 1.55em;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  span {
    font-weight: 500;
  }
`;

export const ContentPost = styled.div`
  width: 8 0vw;
  h1 {
    margin-top: 32px;
  }

  img {
    max-width: 100%;
  }
`;
