import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoComponent } from "./produto.component";
import { SortableProduto } from "./sortable.directive";
import { ProdutoRoutingModule } from './produto-routing.module';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component'
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ProdutoComponent, SortableProduto, NovoProdutoComponent],
    exports: [ProdutoComponent],
    imports: [
        CommonModule,
        ProdutoRoutingModule,
        RouterModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ]
})
export class ProdutoModule {

}