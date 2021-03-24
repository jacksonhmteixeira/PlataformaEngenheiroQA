import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { ProdutoComponent } from './produto.component';

const routes: Routes = [
    {
        path: '',
        component: ProdutoComponent,
        children: [
            { path: '', component: LoginComponent },
            { path: 'novo', component: UsuarioComponent }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProdutoRoutingModule { }
