import { Component, OnInit } from '@angular/core';
import { faSmileWink, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth.service';
import { Usuario } from './usuario'
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //DECLARACAO DE ICONES

  loginForm: FormGroup;
  usuario: Usuario;
  submitted = false;

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      email: this.builder.control('', [Validators.required]),
      senha: this.builder.control('', [Validators.required])
    })
  }

  get formFields() {
    return this.loginForm.controls;
  }

  realizarLogin(usuario: Usuario) {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.toastr.error('Preencha os campos.', "Eii usuário!");
      return;
    }

    this.authService.fazerLogin(this.loginForm.value);
  }
}