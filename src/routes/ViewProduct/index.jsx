import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { listaProdutos } from '../../Components/listaProdutos';
import './viewproduct.css';

export default function index() {
  const lista = listaProdutos;
  const { id } = useParams();
  const proc = lista.filter(prod => prod.id === parseInt(id));
  const produto = proc[0];

  const getImageUrl = (imageName) => {
    return import.meta.env + `/products/${imageName}`;
  };

  return (
    <main>
      <section class="product">
        <div class="product__photo">
          <div class="photo-container">
            <div class="photo-main">
              <img src={produto.image} alt="green apple slice"/>
            </div>
          </div>
        </div>
        <div class="product__info">
          <div class="title">
            <h1>{produto.nome}</h1>
            <span>COD: {produto.id}</span>
          </div>
          <div class="price">
            R$ <span>{new Intl.NumberFormat().format(produto.preco)}</span>
          </div>
          <div class="description">
            <h2>Especificações:</h2>
            <ul>
              {produto.spec.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <button class="buy--btn">Adicione ao carrinho</button>
        </div>
      </section>
    </main>
  );
}
