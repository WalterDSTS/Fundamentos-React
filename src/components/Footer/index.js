import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from '../../context/ThemeSwitcher';

export default function Footer() {
  const { onCheck } = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={onCheck}
      >
        ✅
      </button>
    </Container>
  );
}
