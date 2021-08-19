import { Categoria } from '../../dados/categorias';
import { Status } from '../../dados/status';

export class Produto {
  id: number;
  nomeDoProduto: string;
  imagem: string;
  quantidade: number;
  precoDeCompra: number;
  precoDeVenda: number;
  fornecedor: string;
  descricao: string;
  status: Status;
  categoria: Categoria;
}