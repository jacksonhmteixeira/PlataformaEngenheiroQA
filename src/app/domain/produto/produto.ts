import { Categoria } from '../../dados/categorias';

export class Produto {
  id: number;
  name: string;
  category: Categoria;
  description: string;
  status: string;
  urlImage: string;
  value: number;
  percentageCommission: number;
}