import { ImageProps } from "react-native";

export interface Personagens {
  nome: string;
  imagems: ImageProps['source'];
  descricao: string;
}

const gokuImage = [
    {
        source: require("../assets/personagens/goku50px.png"),
    },
    {
        source: require("../assets/personagens/luffy50px.png"),
    },
    {
        source: require("../assets/personagens/zoro50px.png"),
    },
];

const luffyImage = require("../assets/personagens/luffy50px.png");
const narutoImage = require("../assets/personagens/naruto50px.png");
const zoroImage = require("../assets/personagens/zoro50px.png");

export const PersonagensLista: Personagens[] = [
  {
    nome: "Goku",
    imagems: [gokuImage],
    descricao: "Um personagem de Dragon Ball",
  },
  {
    nome: "Luffy",
    imagems: luffyImage,
    descricao: "Um personagem de One Piece",
  },
  {
    nome: "Naruto",
    imagems: narutoImage,
    descricao: "Um personagem de Naruto",
  },
  {
    nome: "Zoro",
    imagems: zoroImage,
    descricao: "Um personagem de One Piece",
  },
  {
    nome: "Zoro2",
    imagems: zoroImage,
    descricao: "Um personagem de One Piece",
  },
  {
    nome: "Zoro3",
    imagems: zoroImage,
    descricao: "Um personagem de One Piece",
  },
  {
    nome: "Zoro4",
    imagems: zoroImage,
    descricao: "Um personagem de One Piece",
  },
  {
    nome: "Zoro5",
    imagems: zoroImage,
    descricao: "Um personagem de One Piece",
  },
];
