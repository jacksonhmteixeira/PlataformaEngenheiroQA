import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/login/auth.service';
import { Produto } from '../produto/produto';
import { PRODUTOS } from '../../dados/produtos';



@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css'],
})

export class MercadoComponent implements OnInit {
  //MOSTRAR MENU
  currentRate = 2;
  readonly = true;
  produto: Produto;
  mostrarProduto: boolean = false;
  loginON: boolean = false;

  produto$: Observable<Produto[]>;
  filterProduto = new FormControl('');

  constructor(
    pipe: DecimalPipe, 
    private authService: AuthService
    ) {
    this.produto$ = this.filterProduto.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  ngOnInit(){

  }

  search(text: string, pipe: PipeTransform): Produto[] {
    return PRODUTOS.filter(produto => {
      const term = text.toLowerCase();
      return produto.name.toLowerCase().includes(term);
    });
  }
}
