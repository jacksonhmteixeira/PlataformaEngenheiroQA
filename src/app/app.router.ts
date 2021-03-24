import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { PainelComponent } from './domain/painel/painel.component';
import { MercadoComponent } from './domain/mercado/mercado.component';
import { MeusAfiliadosComponent } from './domain/meus-afiliados/meus-afiliados.component';
import { UsuarioComponent } from './domain/usuario/usuario.component';
import { SaldoComponent } from './domain/saldo/saldo.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'painel', component: PainelComponent, canActivate: [AuthGuard] },
    {
        path: 'mercado',
        component: MercadoComponent,
        canActivate: [AuthGuard], 
        children: [
            {
                path: 'novo',
                component: UsuarioComponent
            }
        ],
    },
    { path: 'afiliado', component: MeusAfiliadosComponent, canActivate: [AuthGuard] },
    {
        path: 'produto',
        loadChildren: () => import('./domain/produto/produto.module').then((m) => m.ProdutoModule),
        canActivate: [AuthGuard]
    },
    { path: 'saldo', component: SaldoComponent, canActivate: [AuthGuard] },
    { path: 'usuario', component: UsuarioComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRouting { }
