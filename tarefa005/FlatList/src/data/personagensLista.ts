import { ImageProps } from "react-native";

export interface Personagens {
    nome: string;
    imagem: ImageProps["source"];
    descrição: string;
}

const gokuImage = require("../assets/personagens/goku50px.png");
const luffyImage = require("../assets/personagens/luffy50px.png");
const narutoImage = require("../assets/personagens/naruto50px.png");
const zoroImage = require("../assets/personagens/zoro50px.png");

export const PersonagensLista: Personagens[] = [
    {
        nome: "Goku",
        imagem: gokuImage,
        descrição: "Um personagem de Dragon Ball"
    },
    {
        nome: "Luffy",
        imagem: luffyImage,
        descrição: "Um personagem de One Piece"
    },
    {
        nome: "Naruto",
        imagem: narutoImage,
        descrição: "Um personagem de Naruto"
    },
    {
        nome: "Zoro",
        imagem: zoroImage,
        descrição: "Um personagem de One Piece"
    },
    {
        nome: "Zoro2",
        imagem: zoroImage,
        descrição: "Um personagem de One Piece"
    },
    {
        nome: "Zoro3",
        imagem: zoroImage,
        descrição: "Um personagem de One Piece"
    },
    {
        nome: "Zoro4",
        imagem: zoroImage,
        descrição: "Um personagem de One Piece"
    },
    {
        nome: "Zoro5",
        imagem: zoroImage,
        descrição: "Um personagem de One Piece"
    },
]
    