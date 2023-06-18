import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import { useTheme } from 'styled-components';

import Routes from '../../Routes';

import { Nav } from './styles'

export default function Layout() {
  const theme = useTheme()

  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/123">Post with id</Link>
        <Link to="/posts/123?queryParam=anyValue">Post with query param</Link>
      </Nav>
      <Routes />
      <Footer />
      <div
        style={{
          marginTop: theme.spacing.large,
          borderRadius: theme.borderRadius,
          padding: theme.spacing.large,
          backgroundColor: theme.footerBackgroundColor,
        }}
      >
        Teste de uso do useTheme()!
      </div>
    </BrowserRouter>
  );
}
