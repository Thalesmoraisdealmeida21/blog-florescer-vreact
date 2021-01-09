import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Template from './pages/template';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Template>
          <Routes />
        </Template>
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
};

export default App;
