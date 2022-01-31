import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { Routes } from './routes/Routes';

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Routes />
      {t('title')}
    </div>
  );
};

export default App;
