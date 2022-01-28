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
    if (usuario.email === "plataforma@engenheiroqa.com" && usuario.password === "plataformaEQA") {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/painel']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.toastr.error('Usuário/Senha incorreta.', 'Eii usuário!');
    }
  }

  realizarLogout(){
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['/login']);
    this.toastr.success('Logout relizado com sucesso!', 'Até mais!');
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
