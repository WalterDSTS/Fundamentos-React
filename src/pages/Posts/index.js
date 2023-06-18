import React, { useEffect } from 'react';

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

export default function Posts() {
  // O useEffect abaixo será executado no unmount de um componente. Sempre que 
  // houver uma função com a palavra chave return dentro do escopo do useEffect,
  // a mesma sempre será executada quando o componente que este hook pertencer
  // for desmontado.
  useEffect(() => {
    function handleScroll() {
      console.log('Clicou em algum lugar');
    }

    document.addEventListener('click', handleScroll);

    return () => {
      document.removeEventListener('click', handleScroll)

      console.log('Executa quando o componente for desmontado (des-renderizado)');
    };
  }, [])

  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </Container>
  );
}