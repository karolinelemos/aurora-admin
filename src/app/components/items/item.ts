export enum UnidadeMedida {
    Litro,
    Quilograma,
    Unidade
}

export interface IItems {
    itemId: number;
    nome: string;
    unidadeMed: UnidadeMedida;
    quantidade: number;
    preco: string;
    prodPerecivel: boolean;
    dataValidade: Date;
    dataFabricacao: Date;
}

export class Items implements IItems {
    constructor(public itemId: number,
        public nome: string,
        public unidadeMed: UnidadeMedida,
        public quantidade: number,
        public preco: string,
        public prodPerecivel: boolean,
        public dataValidade: Date,
        public dataFabricacao: Date,
    ) {  }
}