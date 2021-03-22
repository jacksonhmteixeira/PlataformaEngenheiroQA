import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRouting } from "src/app/app.router";
import { ProdutoComponent } from "./produto.component";
import { SortableProduto } from "./sortable.directive";

@NgModule({
    declarations: [ProdutoComponent, SortableProduto],
    exports: [ProdutoComponent],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        AppRouting
    ],
    bootstrap: [ProdutoComponent]
})
export class ProdutoModule {

}