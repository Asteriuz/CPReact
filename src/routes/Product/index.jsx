import React from 'react';
import { listaProdutos } from '../../Components/listaProdutos';
import { Link } from 'react-router-dom';
import './product.css';

export default function index() {
  return (
    <main>
      <h1>Aparelhos</h1>
      <div id='lista-produtos'>
        {listaProdutos.map(produto => (
          <div key={`produto${produto.id}`} className="card">
            <div className="imgBox">
              <img src={produto.image} alt={produto.nome} className="img-product" />
            </div>
            <div className="contentBox">
              <h3>{produto.nome}</h3>
              <h2 className="card-price">R$ {new Intl.NumberFormat('pt-br').format(produto.preco)}</h2>
              <Link to={`${produto.id}`} className='buy'>Ver mais</Link>
            </div>
          </div>
        )
        )}
      </div>
    </main>
  );
}
