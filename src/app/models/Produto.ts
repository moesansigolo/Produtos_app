import { Fornecedor } from "./Fornecedor";


export interface Produto {

  id: number;
  nomeProduto: string;
  qntUnitaria: number;
  preco: number;
  peso: number;
  dataInclusao: Date;
  dataValidade: Date;
  imageUrl: string;
  fornecedoresProdutos: Fornecedor;

}
