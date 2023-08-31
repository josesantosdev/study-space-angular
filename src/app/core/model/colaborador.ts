import { Chefe } from './chefe'

export interface Colaborador {

    id: Number;
    nome: string;
    senha: string;
    stringScore: string;
    score: Number;
    chefe: Chefe[];

}
