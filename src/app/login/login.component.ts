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
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get formFields() {
    return this.loginForm.controls;
  }

  realizarLogin(usuario: Usuario) {
    this.submitted = true;

    if(this.loginForm.valid){
      this.authService.fazerLogin(this.loginForm.value);
    } else {
      if (this.loginForm.invalid) {
          Object.keys(this.loginForm.controls).forEach(campo =>{
            console.log(campo);
            const controle = this.loginForm.get(campo);
            controle.markAsDirty;
          });
      }
    }

  }
}