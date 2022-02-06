import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Routes } from './routes/Routes';
import { loadingNotes } from './redux/notesReducer/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingNotes());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
