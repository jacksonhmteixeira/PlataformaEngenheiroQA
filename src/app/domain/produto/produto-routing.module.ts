import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

const ProdutosRoutes = [
    { path: '', component: ListaProdutoComponent },
    { path: 'novo', component: NovoProdutoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ProdutosRoutes)],
    exports: [RouterModule],
})
export class ProdutoRoutingModule { }
 