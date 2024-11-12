import React from 'react';

const Welcome = () => {
  return (
    <section className="welcome" aria-labelledby="welcome-title">
      <h2 id="welcome-title">The Wedding Of</h2>
      <figure></figure>
      <p></p>
      <button type="button" aria-label="Buka Undangan">
        <i className="bx bxs-envelope-open"></i>
        <span>Buka Undangan</span>
      </button>
    </section>
  );
}

export default Welcome;
