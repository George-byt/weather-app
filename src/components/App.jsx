import React from 'react';
import '../styles/App.css';
import Card from './Card';
import Header from './Header';
import Searcher from './Searcher';
import New from './New';
import UserList from './UserList';

const App = () => {

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Searcher />
        <Card />
        <New />
        <UserList />
      </div>
    </div>
  );
}

export default App;
