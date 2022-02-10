import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaProdutoComponent } from "./lista-produto/lista-produto.component";
import { SortableProduto } from "./sortable.directive";
import { ProdutoRoutingModule } from './produto-routing.module';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component'
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ngx-ckeditor';
import { ModalDeleteComponent } from '../../shared/modal-delete/modal-delete.component';

@NgModule({
    imports: [
        CommonModule,
        ProdutoRoutingModule,
        RouterModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        CKEditorModule
    ],
    declarations: [
        ListaProdutoComponent,
        SortableProduto,
        NovoProdutoComponent,
        ModalDeleteComponent
    ],
    exports: [
        ListaProdutoComponent
    ]
})
export class ProdutoModule {

}