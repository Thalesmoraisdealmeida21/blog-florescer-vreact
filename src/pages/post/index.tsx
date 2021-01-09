import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Helmet from 'react-helmet';
import { ContentPost } from './styles';

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
  const [post, setPost] = useState<Post>({} as Post);

  const { postName } = useParams<{ postName: string }>();

  useEffect(() => {
    async function getPostData(): Promise<void> {
      try {
        const response = await api.get<Post>(`/posts/post/${postName}`);

        setPost(response.data);
      } catch {
        alert('Ocorreu um erro ao abter os dados');
      }
    }

    getPostData();
  }, [postName]);

  return (
    <Container>
      <Helmet>
        <title>{post.name}</title>

        <meta name="description" content={post.description} />
      </Helmet>
      <Content>
        <header>
          <img
            src={`${process.env.REACT_APP_API_URL}/files/${post.image}`}
            alt="img"
          />
        </header>

        <ContentPost>
          <h1>{post.name}</h1>
          <div
            style={{ maxWidth: '100%' }}
            dangerouslySetInnerHTML={{
              __html: post.description,
            }}
          />
        </ContentPost>
      </Content>
    </Container>
  );
};

export default Home;
