import { Categoria } from '../categoria/categorias';
import { Status } from '../status/status';

export class Produto {
  id: number;
  nomeDoProduto: string;
  imagem: string;
  quantidade: number;
  precoDeCompra: number;
  precoDeVenda: number;
  descricao: string;
  status: Status;
  categoria: Categoria;
}