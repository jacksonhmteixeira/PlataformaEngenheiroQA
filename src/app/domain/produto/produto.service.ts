import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Produto } from './produto';
import { PRODUTO } from './produtos';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';

interface SearchResult {
  produtos: Produto[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(produtos: Produto[], column: SortColumn, direction: string): Produto[] {
  if (direction === '' || column === '') {
    return produtos;
  } else {
    return [...produtos].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(produto: Produto, term: string, pipe: PipeTransform) {
  return produto.name.toLowerCase().includes(term.toLowerCase())
    || produto.category.toLowerCase().includes(term.toLowerCase())
    || produto.description.toLowerCase().includes(term.toLowerCase())
    || produto.status.toLowerCase().includes(term.toLowerCase());
}

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _produtos$ = new BehaviorSubject<Produto[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._produtos$.next(result.produtos);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get produtos$() { return this._produtos$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. ORDENAÇÃO
    let produtos = sort(PRODUTO, sortColumn, sortDirection);

    // 2. FILTRO
    produtos = produtos.filter(produto => matches(produto, searchTerm, this.pipe));
    const total = produtos.length;

    // 3. PAGINAÇÃO
    produtos = produtos.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ produtos, total });
  }
}
