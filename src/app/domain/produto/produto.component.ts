import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SortableProduto, SortEvent } from './sortable.directive';
import { ProdutoService } from './produto.service'
import { Produto } from './produto';
import { Observable } from 'rxjs';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [ ProdutoService, DecimalPipe ]
})
export class ProdutoComponent implements OnInit {

  @ViewChildren(SortableProduto) headers: QueryList<SortableProduto>;

  produtos$: Observable<Produto[]>;
  total$: Observable<number>;

  constructor(public service: ProdutoService) {
    this.produtos$ = service.produtos$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
