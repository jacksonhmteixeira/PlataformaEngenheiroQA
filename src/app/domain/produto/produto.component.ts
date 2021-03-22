import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { ProdutoService } from './produto.service'
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  produtos$: Observable<Produto[]>;
  total$: Observable<number>;

  constructor(public service: ProdutoService) {
    this.produtos$ = service.produtos$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
