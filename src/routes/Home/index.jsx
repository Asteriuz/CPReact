import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function index() {
  return (
    <main className='home'>
      <section id="sale1">
        <div class='sale-text'>
          <h1>PROMOÇÃO SURPRESA DE INVERNO</h1>
          <h2>TEMPO LIMITADO (Aplicado em toda loja)</h2>
        </div>
        <div class='sale-num'>
          <h1>20%</h1>
          <h1>OFF</h1>
          </div>
      </section>
      <Link className='btn' to="/product">Veja todos nossos aparelhos</Link>
    </main>
  );
}
