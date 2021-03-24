import { Categoria } from '../../dados/categorias';
import { Status } from '../../dados/status';

export class Produto {
  id: number;
  name: string;
  category: Categoria;
  description: string;
  status: Status;
  urlImage: string;
  value: number;
  percentageCommission: number;
}