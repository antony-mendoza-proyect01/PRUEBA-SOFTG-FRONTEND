import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  loading: boolean =false;
  constructor(private toastr: ToastrService,
    //Llamamos el servicio
      private  _userService: UserService,
      private router:Router,
      private  _errorService: ErrorService) { }

  ngOnInit(): void {
  }
  login(){
    //Validamos que el usuario ingrese datos
    if(this.username==''||this.password==''){
      this.toastr.error('Todos los campos son Obligatorios', 'Error!');
      return
    }
    //creamos el objeto o body
    const user: User = {
      username: this.username,
      password:this.password
    }
  this.loading= true;

  this._userService.login(user).subscribe({
  next: (token)=> {
    this.router.navigate(['/driver'])
    localStorage.setItem('token', token)

  },
  error:(e:HttpErrorResponse)=>{
    this._errorService.msjError(e);
    this.loading = false;
  }
})
  }


}
