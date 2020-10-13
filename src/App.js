import React from 'react';
import './App.css';
import Footer from './Components/footer';
import Header from './Components/header';
import Main from './Components/main';
import Options from './Components/Options';

function App() {
  return (
    <div>
      <Header />
      <Options />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
