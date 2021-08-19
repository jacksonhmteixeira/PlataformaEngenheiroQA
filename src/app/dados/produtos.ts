import { CATEGORIAS } from './categorias';
import { Produto } from '../domain/produto/produto';
import { STATUS } from './status';

export const PRODUTOS: Produto[] = [
    {
        id: 1,
        nomeDoProduto: 'Fone de ouvido AKG K414 P preto',
        imagem: '../../../assets/Fone de Ouvido.png',
        quantidade: 1,
        precoDeCompra: 5678,
        precoDeVenda: 3215,
        fornecedor: 'Apple',
        descricao: 'Os K414 P são fones de ouvido leves tipo...',
        status: STATUS[0],
        categoria: CATEGORIAS[6]
    }
];





