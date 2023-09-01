import { ListaProdutos } from "../Components/ListaProdutos";
import { Link } from "react-router-dom";

export default function Produtos() {
  return (
    <>
      <h1>Produtos</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {ListaProdutos.map((produto, indice) => (
            <tr key={indice}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td><Link to={`/editar/produtos/${produto.id}`}>Editar</Link></td>
            </tr>
          ))}
        </tbody>
      </table >
    </>
  );
}
