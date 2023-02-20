import React from 'react';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';
import YouDeserve from './components/YouDerserve';
import Cardsbox from './components/Cardsbox';
import Everyone from './components/Everyone';
import DiscoverMore from './components/DiscoverMore';
import EveryoneNeeds from './components/EveryoneNeeds';
import {useMediaQuery,useTheme } from '@mui/material';
import Heading from './components/Heading';
import WhyShouldBuy from './components/WhyShouldBuy';
import HomePage from './components/HomePage';
import { Logo } from './components/Logo';
import Designer from './components/Designer';
import AsSureAs from './components/AsSureAs';


function App() {
  const theme=useTheme();
  const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className="App" style={{}}>
      <Navbar/>
      <HomePage/>
      <Designer/>
      <Logo/>
      <WhyShouldBuy/>
      {isMatch?<Heading/>:<EveryoneNeeds/>}
      <DiscoverMore/>
      {isMatch?<AsSureAs/>:<Everyone/>}
      <Cardsbox/>
      <YouDeserve/>       
      <Footer/>
    </div>
  );
}

export default App;
