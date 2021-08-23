import { CATEGORIAS } from '../categoria/categorias';
import { Produto } from './produto';
import { STATUS } from '../status/status';

export const PRODUTOS: Produto[] = [
    {
        id: 1,
        nomeDoProduto: 'Monitor 18 Polegadas',
        imagem: '../../../assets/monitor.png',
        quantidade: 1,
        precoDeCompra: 5678,
        precoDeVenda: 3215,
        descricao: 'Os K414 P são fones de ouvido leves tipo...',
        status: STATUS[0],
        categoria: CATEGORIAS[6]
    },{
        id: 2,
        nomeDoProduto: 'Teclado',
        imagem: '../../../assets/teclado.png',
        quantidade: 1,
        precoDeCompra: 5678,
        precoDeVenda: 3215,
        descricao: 'Os K414 P são fones de ouvido leves tipo...',
        status: STATUS[0],
        categoria: CATEGORIAS[6]
    },{
        id: 3,
        nomeDoProduto: 'Mouse',
        imagem: '../../../assets/mouse.png',
        quantidade: 1,
        precoDeCompra: 5678,
        precoDeVenda: 3215,
        descricao: 'Os K414 P são fones de ouvido leves tipo...',
        status: STATUS[0],
        categoria: CATEGORIAS[6]
    }
];





