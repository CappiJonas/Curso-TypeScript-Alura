export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this, null, 2);
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this) === JSON.stringify(negociacoes);
    }
}
//# sourceMappingURL=negociacoes.js.map