import React, { useState, createContext, useMemo } from 'react'

import themes from '../styles/themes'
export const ThemeContext = createContext('dark');

export function ThemeSwitcher(props) {
  const [theme, setTheme] = useState('dark');
  const [check, setCheck] = useState('checked')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  function handleCheck() {
    setCheck(prevState => prevState === 'checked' ? 'unchecked' : 'checked')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        check,
        currentTheme,
        onToggleTheme: handleToggleTheme,
        onCheck: handleCheck,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}