import styled from 'styled-components';

export const Container = styled.div`
  background: #4d96ca;
  width: 100vw;
  height: 160px;
  background-size: cover;
  max-width: 100vw;

  img {
    @media (max-width: 900px) {
      height: 120px;
      width: 350px;
      margin: auto;
    }

    @media (max-width: 400px) {
      height: 108px;
      width: 300px;
    }
  }

  header {
    display: flex;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
`;

export const MenuCollapse = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  button {
    visibility: hidden;
    span {
      border: 1px solid silver;
    }
  }

  ul {
    display: inline-flex;
    list-style: none;
    margin: auto 0;
    margin-left: auto;
    margin-right: 10vw;
    @media (max-width: 900px) {
      margin: auto;
    }

    a {
      text-decoration: none;
      color: white;
      transition: 0.7s;
      font-size: 18px;
      &:hover {
        font-size: 16px;
        border-bottom: 2px solid white;
      }
    }

    li {
      margin: 20px;
      color: white;
    }
  }
`;

export const Content = styled.div`
  margin: 0 10vw;
  margin-top: 50px;
`;
