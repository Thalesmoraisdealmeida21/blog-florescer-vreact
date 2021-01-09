import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, Content, Post } from './styles';

interface Post {
  name: string;
  resume: string;
  description: string;
  image: string;
  // eslint-disable-next-line camelcase
  update_at: Date;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getPosts(): Promise<void> {
      try {
        const response = await api.get<Post[]>('/posts');
        setPosts(response.data);
      } catch {
        alert('Ocorreu um erro ao trazer os dados da página');
      }
    }

    getPosts();
  }, []);
  return (
    <Container>
      <Content>
        {posts.map(post => {
          return (
            <Link to={`/${post.name}`}>
              <Post>
                <img
                  src={`${process.env.REACT_APP_API_URL}/files/${post.image}`}
                  alt="Imagem não carregada"
                />

                <h1>{post.name}</h1>
                <p>{post.resume}</p>

                <span>
                  {Intl.DateTimeFormat('pt-BR').format(post.update_at)}
                </span>
              </Post>
            </Link>
          );
        })}
      </Content>
    </Container>
  );
};

export default Home;
