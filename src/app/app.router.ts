import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './domain/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';
import { PainelComponent } from './domain/painel/painel.component';
import { MercadoComponent } from './domain/mercado/mercado.component';
import { MeusAfiliadosComponent } from './domain/meus-afiliados/meus-afiliados.component';

export const AppRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent},
            { path: 'painel', component: PainelComponent, canActivate: [AuthGuard]},
            { path: 'mercado', component: MercadoComponent, canActivate: [AuthGuard]},
            { path: 'afiliados', component: MeusAfiliadosComponent, canActivate: [AuthGuard]},
            { path: '**', component: PageNotFoundComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppRouting { }
