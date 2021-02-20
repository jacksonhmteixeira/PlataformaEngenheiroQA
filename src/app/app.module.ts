import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRouting } from './app.router';
import { AuthService } from './login/auth.service';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PainelComponent } from './domain/painel/painel.component';
import { MercadoComponent } from './domain/mercado/mercado.component';
import { MeusAfiliadosComponent } from './domain/meus-afiliados/meus-afiliados.component';
import { ProdutoComponent } from './domain/produto/produto.component';
import { SaldoComponent } from './domain/saldo/saldo.component';
import { UsuarioComponent } from './domain/usuario/usuario.component';
import { VMessageModule } from './shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    PainelComponent,
    MercadoComponent,
    MeusAfiliadosComponent,
    ProdutoComponent,
    SaldoComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbModule,
    FontAwesomeModule,
    VMessageModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
