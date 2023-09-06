import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { listaProdutos } from '../../Components/listaProdutos';

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
      <h1>{produto.nome}</h1>
    </main>
  );
}
