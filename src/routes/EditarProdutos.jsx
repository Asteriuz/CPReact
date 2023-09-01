import { useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";

export default function EditarProdutos() {
  document.title = "Editar Produtos";

  const { id } = useParams();

  const produto = ListaProdutos.find((produto) => {
    if (produto.id === parseInt(id)) {
      return produto;
    }
  });

  return (
    <div>
      <h1>EditarProdutos</h1>
      <p>Produto selecionado - {id}</p>
      <p>Nome: {produto.nome}</p>
      <p>Preço: {produto.preco}</p>
    </div>
  );
}
