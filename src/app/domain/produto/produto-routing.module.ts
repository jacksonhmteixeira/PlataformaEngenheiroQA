import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { ProdutoComponent } from './produto.component';

const ProdutosRoutes = [
    { path: '', component: ProdutoComponent },
    { path: 'novo', component: NovoProdutoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ProdutosRoutes)],
    exports: [RouterModule],
})
export class ProdutoRoutingModule { }
