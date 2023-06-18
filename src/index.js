import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeSwitcher } from './context/ThemeSwitcher';

ReactDOM.render(
  <ThemeSwitcher>
    <App />
  </ThemeSwitcher>,
  document.getElementById('root'),
);
