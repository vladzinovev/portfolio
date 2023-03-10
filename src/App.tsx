import React from 'react';
// components
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Empty from './components/Empty';
import Home from './components/Home';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Home />
      <Empty/>
      <Nav />
      <Empty/>
      <About />
      <Empty/>
      <Services />
      <Empty/>
      <Work />
      <Empty/>
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
