import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

import { MenuCollapse, Container, Content } from './styles';

const Template: React.FC = ({ children }) => {
  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />

        <MenuCollapse>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <a href="https://app.florescereducacao.com.br/buy-speeches">
                Palestras
              </a>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </MenuCollapse>
      </header>

      <Content>{children}</Content>
    </Container>
  );
};

export default Template;
