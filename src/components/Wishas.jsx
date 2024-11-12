import React from 'react';

const Wishas = () => {
  return (
    <section className="wishas" id="wishas" aria-labelledby="wishas-title">
      <h2 id="wishas-title">Doa dan Harapan</h2>
      <p>Silakan kirimkan doa dan harapan terbaik untuk kami.</p>
      <form>
        <input type="text" placeholder="Tuliskan pesan Anda" />
        <button type="submit">Kirim Pesan</button>
      </form>
    </section>
  );
}

export default Wishas;
