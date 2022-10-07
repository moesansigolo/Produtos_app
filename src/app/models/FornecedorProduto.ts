import { Fornecedor } from "./Fornecedor";
import { Produto } from "./Produto";

export interface FornecedorProduto {

  FornecedorId: number;
  Fornecedor: Fornecedor;
  ProdutoId: number;
  Produto: Produto;
}
