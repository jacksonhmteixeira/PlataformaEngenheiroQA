import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SortableProduto, SortEvent } from '../sortable.directive';
import { ProdutoService } from '../produto.service'
import { Produto } from '../produto';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { Categoria } from '../../categoria/categorias';
import { ModalDeleteComponent } from '../../../shared/modal-delete/modal-delete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css'],
  providers: [ProdutoService, DecimalPipe]
})
export class ListaProdutoComponent implements OnInit {

  @ViewChildren(SortableProduto) headers: QueryList<SortableProduto>;

  produtos$: Observable<Produto[]>;
  total$: Observable<number>;
  produtos: Produto[];
  categorias: Categoria[];
  modal: ModalDeleteComponent;

  constructor(
    public service: ProdutoService,
    private modalService: NgbModal
  ) {
    this.produtos$ = service.produtos$;
    this.total$ = service.total$;
    this.produtos = service.getProduto();
    this.categorias = service.getCategoria();
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

  open(nomeProduto) {
    const modalRef = this.modalService.open(ModalDeleteComponent);
    modalRef.componentInstance.name = nomeProduto;
  }
}