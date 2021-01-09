import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: #000;
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
