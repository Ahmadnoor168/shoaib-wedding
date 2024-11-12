import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home" aria-labelledby="home-title">
      <h2 id="home-title">Undangan Pernikahan</h2>
      <figure></figure>
      <h3></h3>
      <div className="home-time"></div>
      <a href="#" target="_blank" role="link" aria-label="Simpan ke kalender">
        <i className='bx bx-calendar-check' aria-hidden="true"></i>
        <span>Simpan ke kalender</span>
      </a>
      <div className="scroll_down">
        <i className="bx bx-mouse bx-fade-down" aria-hidden="true"></i>
        <span>scroll down</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden="true">
        <path fill="#f8f9fa" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,122.7C672,117,768,171,864,160C960,149,1056,75,1152,64C1248,53,1344,107,1392,133.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </section>
  );
}

export default Home;
