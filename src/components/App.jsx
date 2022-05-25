import React from 'react';
import '../styles/App.css';
import Card from './Card';
import Header from './Header';
import Searcher from './Searcher';

const App = () => {


  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Searcher />
        <Card />
      </div>
    </div>
  );
}

export default App;
