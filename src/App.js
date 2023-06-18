import React, { useContext, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import { ThemeContext } from './context/ThemeSwitcher';

export default function App() {
  const { currentTheme, check } = useContext(ThemeContext);
  const firstRender = useRef(true)

  useEffect(() => {
    console.log('Renderiza a cada mudança do lyfecycle dos componentes');
  })
  
  useEffect(() => {
    console.log('Renderiza apenas uma vez (on mount)');
  }, [])

  useEffect(() => {
    console.log('Renderiza com a alteração de algum estado específico');
  }, [check])
  
  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false
      return;
    } 

    console.log('Esse useEffect não renderizou no primeiro render da aplicação');
  }, [check])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};
