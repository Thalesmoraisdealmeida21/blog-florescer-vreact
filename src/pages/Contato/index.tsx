import React from 'react';

import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { Container, Content } from './styles';

interface Post {
  name: string;
  resume: string;
  description: string;
  image: string;
  // eslint-disable-next-line camelcase
  update_at: Date;
}

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Contato</h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '16px',
          }}
        >
          <span> Telefone / Whatsapp : +55 62 981933699 </span>
          <span> E-mail: contato@florescereducacao.com.br </span>
        </div>

        <div style={{ marginTop: '32px' }}>
          <FaInstagram size={40} style={{ cursor: 'pointer' }} />
          <FaFacebook
            style={{ marginLeft: '16px', cursor: 'pointer' }}
            size={40}
          />
        </div>
      </Content>
    </Container>
  );
};

export default Home;
