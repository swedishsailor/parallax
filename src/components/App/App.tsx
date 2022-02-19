import React from 'react';
import logo from './logo.svg';
import Hero from '../Hero/Hero';
import Middle from '../Middle/Middle';
import './App.scss';
import BlankSpace from '../BlankSpace/BlankSpace';

function App() {
  return (
    <div className="App">
      <BlankSpace></BlankSpace>
      <Hero></Hero>
      <Middle></Middle>
    </div>
  );
}

export default App;
