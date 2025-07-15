import React from 'react';
import Headerr from './Components/header';
import Nav from './Components/nav';
import About from './Components/about';
import Footer from './Components/footer';
import Connect from './Components/connect';
function App() {
  return (
    <div className='App'>
      <Nav/>
      <Headerr/>
      <About/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
