import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import classNames from 'classnames';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={classNames("App", { "dark-mode": isDarkMode })}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Content  />
    </div>
  );
}

export default App;
