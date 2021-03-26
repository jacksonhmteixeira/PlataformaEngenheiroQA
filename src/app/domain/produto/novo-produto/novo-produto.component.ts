import { Component, OnInit } from '@angular/core';
import { DadosGeraisComponent } from './dados-gerais/dados-gerais.component';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active = 1;

  prosseguirProximaAba(numeroAba: number) {
    this.active = numeroAba;
  }

}
