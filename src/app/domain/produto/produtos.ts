import { Produto } from './produto';

export const PRODUTO: Produto[] = [
    {
        id: 1,
        name: 'Fone de ouvido AKG K414 P preto',
        category: 'Acessório',
        description: 'Os K414 P são fones de ouvido leves tipo fechado que proporcionam som fabuloso e excelente proteção contra ruído ambiente. Usando o mecanismo único de eixo-3D, eles se dobram dentro de uma pequena bag que pode ser levada a qualquer lugar. Bag de transporte incluída!',
        status: 'Ativo',
        urlImage: '../../../assets/Fone de Ouvido.png',
        value: 5678,
        percentageCommission: 80
    },
    {
        id: 2,
        name: 'Playstation 4',
        category: 'Acessório',
        description: 'Mais leve e mais fino, o sistema PlayStation 4 tem disco rígido de 1TB para tudo o que há de melhor em jogos, músicas e muito mais!',
        status: 'Ativo',
        urlImage: '../../../assets/playstation-4.png',
        value: 8907,
        percentageCommission: 80
    },
    {
        id: 3,
        name: 'Controle',
        category: 'Acessório',
        description: 'Descubra uma experiência de jogos mais profunda e altamente imersiva1 com o novo e inovador controle do PS5™ .',
        status: 'Ativo',
        urlImage: '../../../assets/controle.png',
        value: 9870,
        percentageCommission: 80
    }
];