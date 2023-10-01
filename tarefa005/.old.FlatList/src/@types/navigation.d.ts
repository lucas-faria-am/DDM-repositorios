import { Personagens } from "../data/personagensLista"

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Lista: undefined
            ItemLista: Personagens
        }
    }
}