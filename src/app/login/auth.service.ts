import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  fazerLogin(usuario: Usuario) {
    if (usuario.email === "plataforma@engenheiroqa.com" && usuario.senha === "plataformaEQA") {
      this.usuarioEstaAutenticado(true);
      this.router.navigate(['/painel']);
    } else {
      this.usuarioEstaAutenticado(false);
      this.toastr.error('Usuário/Senha incorreto!');
    }
  }

  realizarLogout() {
    this.usuarioEstaAutenticado(false);
    this.router.navigate(['/login']);
    this.toastr.success('Logout relizado com sucesso!');
  }

  verificarSeEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  usuarioEstaAutenticado(isTrueOrFalse) {
    this.usuarioAutenticado = isTrueOrFalse;
    this.mostrarMenuEmitter.emit(isTrueOrFalse);
  }
}
