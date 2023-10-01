export const cores = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundligt: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
}

export const Itens = [
    {
        id:1,
        categoria: 'produto',
        nomeProd: 'Action figure Luffy',
        precoProd:550,
        descricao: 'Boneco Luffy 18cm Original - Plastico',
        imagemProd: require('../database/imagens/produtos/Luffy1.png'),

        imagemProdList: [
            require('../database/imagens/produtos/Luffy2.png'),
            require('../database/imagens/produtos/Luffy3.png'),
            require('../database/imagens/produtos/Luffy4.png'),   
        ],

    },
    {
        id:2,
        categoria: 'produto',
        nomeProd: 'Action figure Roronoa Zoro',
        precoProd:550,
        descricao: 'Boneco Roronoa Zoro 18cm Original - Plastico',
        imagemProd: require('../database/imagens/produtos/zoro2.png'),
        imagemProdList: [
            require('../database/imagens/produtos/zoro3.png'),
            require('../database/imagens/produtos/zoro4.png'),   
        ],

    }
]