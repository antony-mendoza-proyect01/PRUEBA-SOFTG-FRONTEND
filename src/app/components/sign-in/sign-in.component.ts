import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    //consumir el servicio
    private _userService: UserService,
    //para moder movernos entre componentes importamos Router
    private router: Router,
    private  _errorService: ErrorService) {
  }

  ngOnInit(): void {
  }

  addUser() {
    //Validamos que el usuario ingrese valores
    if (this.username == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('Todos los campos son Obligatorios', 'Error!');
      return;
    }
    //Validamos que las password sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las password ingresadas son distintas', 'error')
    }
    //creamos el objeto o body
    const user: User = {
      username: this.username,
      password: this.password,

    }
    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`usuario ${this.username}fue registrado `, 'Usuario Registrado')
        //movernos entre componentes
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

}

