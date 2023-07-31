import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Stocks from './components/Stocks';
import Hero from './components/Hero';
import Articles from './components/Articles';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal'
import SignInModal from './components/SignInModal'
import stockData from './data/data';


export default function App() {
  
 const stocksArray = stockData.map(function(stocks){
    return (
        <Stocks key = {stocks.key} data={stocks}/>
    )
  })
  
  const [color, changeColor] = useState("whitesmoke");

  document.body.style.backgroundColor = color;
   
  return (
    <div className = "app">
      <Header />
      <Stocks /> 
      <Hero />
      <Articles />
      <Footer />
      <SignUpModal />
      <SignInModal />
    </div>
    
  );
}

/* Removed from just above the </div>.  This was causing the multiple carousels at the bottoms of the page

{stocksArray}

*/