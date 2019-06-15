import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardsCarousel } from './components/cardsCarousel/CardsCarousel';

const App: React.FC = () => {
  return (
    <div className="App">
      <CardsCarousel />
    </div>
  );
};

export default App;
