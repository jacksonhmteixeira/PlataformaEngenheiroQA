import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/dados/categorias';
import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {

  produtos: Produto[];
  categorias: Categoria[];

  constructor(public service: ProdutoService) {
   
    this.produtos = service.getProduto();
    this.categorias = service.getCategoria();
  }



  ngOnInit() { }
}




