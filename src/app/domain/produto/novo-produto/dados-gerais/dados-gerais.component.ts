import { Component, OnInit } from "@angular/core";
import { NovoProdutoComponent } from "../novo-produto.component";

@Component({
    selector: 'app-dados-gerais',
    templateUrl: './dados-gerais.component.html'
})
export class DadosGeraisComponent implements OnInit{
    constructor(
        public novoProduto: NovoProdutoComponent
    ) { }

    ngOnInit(): void {
    }

    prosseguirDadosGerais(){
        this.novoProduto.prosseguirProximaAba(2);
    }
}