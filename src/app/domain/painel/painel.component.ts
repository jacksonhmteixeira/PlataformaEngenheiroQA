import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
  providers: [ ProdutoService ]
})

export class PainelComponent implements OnInit {

  produtos: Produto[];

  quantidadeTotalDeProduto: number = 0;
  valorTotalDeCompra: number = 0;
  valorTotalDeVenda: number = 0;
  totaisDeProdutosInativos: number = 0;
  totaisDeProdutosAtivos: number = 0;

  constructor(public service: ProdutoService) {
    this.produtos = service.getProduto();
  }

  ngOnInit() { 
    this.calcularTotalDeProduto();
    this.calcularValorTotalCompra();
    this.calcularValorTotalVenda();
    this.calcularQuantidadeDeProdutosAtivos();
    this.calcularQuantidadeDeProdutosInativos();
  }

  calcularTotalDeProduto(){
    this.quantidadeTotalDeProduto = this.produtos.length;
  }

  calcularValorTotalCompra(){
    for(var i = 0; i < this.produtos.length; i++){
      this.valorTotalDeCompra += this.produtos[i].precoDeCompra;
    }
  }

  calcularValorTotalVenda(){
    for(var i = 0; i < this.produtos.length; i++){
      this.valorTotalDeVenda += this.produtos[i].precoDeVenda;
    }
  }

  calcularQuantidadeDeProdutosAtivos(){
    for(var i = 0; i < this.produtos.length; i++){
      if(this.produtos[i].status.id == 1){
        this.totaisDeProdutosAtivos += 1;
      }
    }
  }

  calcularQuantidadeDeProdutosInativos(){
    for(var i = 0; i < this.produtos.length; i++){
      if(this.produtos[i].status.id == 2){
        this.totaisDeProdutosInativos += 1;
      }
    }
  }
}




