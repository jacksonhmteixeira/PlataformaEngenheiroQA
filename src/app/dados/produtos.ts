import { CATEGORIAS } from './categorias';
import { Produto } from '../domain/produto/produto';
import { STATUS } from './status';

export const PRODUTOS: Produto[] = [
    {
        id: 1,
        name: 'Fone de ouvido AKG K414 P preto',
        category: CATEGORIAS[6],
        description: 'Os K414 P são fones de ouvido leves tipo...',
        status: STATUS[0],
        urlImage: '../../../assets/Fone de Ouvido.png',
        value: 5678,
        percentageCommission: 80
    },
    {
        id: 2,
        name: 'Playstation 4',
        category: CATEGORIAS[1],
        description: 'Mais leve e mais fino, o sistema PlayStation 4 tem disco rígido de 1TB para tudo o que há de melhor em jogos, músicas e muito mais!',
        status: STATUS[1],
        urlImage: '../../../assets/playstation-4.png',
        value: 8907,
        percentageCommission: 80
    },
    {
        id: 3,
        name: 'Controle',
        category: CATEGORIAS[6],
        description: 'Descubra uma experiência de jogos mais profunda e altamente imersiva1 com o novo e inovador controle do PS5™ .',
        status: STATUS[1],
        urlImage: '../../../assets/controle.png',
        value: 9870,
        percentageCommission: 80
    }
];





