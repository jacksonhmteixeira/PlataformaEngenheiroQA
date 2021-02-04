import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/login/auth.service';

interface Produto {
  name: string;
}

const PRODUTO: Produto[] = [
  {
    name: 'Capsula'
  },
  {
    name: 'Playstation 4'
  },
  {
    name: 'Controle'
  }
];

function search(text: string, pipe: PipeTransform): Produto[] {
  return PRODUTO.filter(produto => {
    const term = text.toLowerCase();
    return produto.name.toLowerCase().includes(term);
  });
}

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css']
})
export class MercadoComponent implements OnInit {
  currentRate = 2;
  readonly = true;

  //MOSTRAR MENU
  mostrarProduto: boolean = false;
  loginON: boolean = false;

  produto$: Observable<Produto[]>;
  filterProduto = new FormControl('');

  constructor(pipe: DecimalPipe, private authService: AuthService) {
    this.produto$ = this.filterProduto.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }

  ngOnInit(){


  }
}
