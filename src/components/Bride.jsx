import React from 'react';

const Bride = () => {
  return (
    <section className="bride" id="bride" aria-labelledby="bride-title">
      <h2 id="bride-title" data-aos="zoom-in" data-aos-duration="1000">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
      <h3 data-aos="zoom-in" data-aos-duration="1000">Assalamualaikum Warahmatullahi Wabarakatuh</h3>
      <p data-aos="zoom-in" data-aos-duration="1000">
        Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri
        acara pernikahan kami:
      </p>
      <div className="bride_couple">
        <ul role="list" aria-label="List Pasangan Pengantin"></ul>
      </div>
      <i className="bx bx-heart" aria-hidden="true"></i>
      <i className="bx bx-heart" aria-hidden="true"></i>
      <i className="bx bx-heart" aria-hidden="true"></i>
      <i className="bx bx-heart" aria-hidden="true"></i>
      <i className="bx bx-heart" aria-hidden="true"></i>
    </section>
  );
}

export default Bride;
