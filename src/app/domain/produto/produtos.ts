import { CATEGORIAS } from '../categoria/categorias';
import { Produto } from './produto';
import { STATUS } from '../status/status';

export const PRODUTOS: Produto[] = [
    {
        id: 1,
        nomeDoProduto: 'Monitor 18 Polegadas',
        imagem: '../../../assets/monitor.png',
        quantidade: 1,
        precoDeCompra: 599.99,
        precoDeVenda: 791.42,
        descricao: 'Os K414 P são fones de ouvido leves tipo...',
        status: STATUS[0],
        categoria: CATEGORIAS[6]
    },{
        id: 2,
        nomeDoProduto: 'Teclado',
        imagem: '../../../assets/teclado.png',
        quantidade: 1,
        precoDeCompra: 99.99,
        precoDeVenda: 159.99,
        descricao: 'Os K414 P são fones de ouvido leves tipo...',
        status: STATUS[1],
        categoria: CATEGORIAS[6]
    },{
        id: 3,
        nomeDoProduto: 'Mouse',
        imagem: '../../../assets/mouse.png',
        quantidade: 1,
        precoDeCompra: 59.90,
        precoDeVenda: 99.90,
        descricao: 'Os K414 P são fones de ouvido leves tipo...',
        status: STATUS[0],
        categoria: CATEGORIAS[6]
    },{
        id: 4,
        nomeDoProduto: 'Monitor 24" polegadas',
        imagem: '../../../assets/monitor.png',
        quantidade: 4,
        precoDeCompra: 750,
        precoDeVenda: 967.12,
        descricao: 'Os K414 P são fones de ouvido leves tipo...',
        status: STATUS[1],
        categoria: CATEGORIAS[6]
    }
];





