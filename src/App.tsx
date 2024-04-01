import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import FeaturedProperties from './Components/FeaturedProperties/FeaturedProperties';
import MeetDevelopers from './Components/MeetDevelopers/MeetDevelopers';
import TopProperties from './Components/TopProperties/TopProperties';
import DownloadApp from './Components/DownloadApp/DownloadApp';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedProperties />
      <MeetDevelopers />
      <TopProperties />
      <DownloadApp />
      <Footer/>
    </div>
  );
}

export default App;
