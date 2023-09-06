import React from 'react';
import { listaProdutos } from '../../Components/listaProdutos';
import { Link } from 'react-router-dom';
import './style.css';

export default function index() {
  return (
    <main>
      <h1>Produtos</h1>
      <div id='lista-produtos'>
        {listaProdutos.map(produto => (
          <div className="card">
            <div class="imgBox">
              <img src={produto.image} alt={produto.nome} class="mouse" />
            </div>
            <div class="contentBox">
              <h3>{produto.nome}</h3>
              <h2 class="price">R$ {produto.preco}</h2>
              <Link to={`${produto.id}`}><a class="buy">Compre agora</a></Link>
            </div>
          </div>
        )
        )}
      </div>
    </main>
  );
}
