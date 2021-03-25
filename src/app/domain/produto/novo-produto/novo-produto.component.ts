import { Component, OnInit } from '@angular/core';
import { DadosGeraisComponent } from './dados-gerais/dados-gerais.component';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html'
})
export class NovoProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active = 1;

}
