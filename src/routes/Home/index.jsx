import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Pc from '../../assets/gamingpc.png';

export default function index() {
  return (
    <main className='home'>
      <div className="sales-container">
        <section id="sale1">
          <div class='sale-text'>
            <h1>PROMOÇÃO SURPRESA DE INVERNO</h1>
            <h2>TEMPO LIMITADO</h2>
          </div>
          <div class='sale-num'>
            <h1>20%</h1>
            <h1>OFF</h1>
          </div>
        </section>
        <div class="container">
          <div class="imgBx">
            <img src={Pc} alt="Gaming PC" />
          </div>
          <div class="details">
            <div class="content">
              <h2>PC GAMER
                <span>GTX READY ON</span>
              </h2>
              <p>
                Experimente a Potência Extrema com o PC Gamer GTX Ready On!
                Características Principais:
                Placa de Vídeo GTX de Última Geração: Equipado com a poderosa placa de vídeo NVIDIA GeForce GTX, você terá gráficos de alta qualidade e taxa de quadros incrivelmente suave. Cada detalhe ganha vida, seja em jogos AAA ou em títulos competitivos.
                Processador de Alto Desempenho: Com um processador de última geração, seu PC Gamer GTX Ready On não apenas lida facilmente com os jogos mais exigentes, mas também oferece potência para multitarefa intensiva.
              </p>
              <h3>R$12.800</h3>
              <button>Compre agora</button>
            </div>
          </div>
        </div>
      </div>
      <Link className='btn' to="/product">Veja todos nossos aparelhos</Link>
    </main>
  );
}
