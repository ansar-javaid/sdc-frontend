import { Component } from '@angular/core';
import { ILogin } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public errorMessage: string = '';
  public submitted: boolean = false;
  public loginData: ILogin = {
    email: '',
    password: ''
  }


  public handleLogin(): void {
    this.submitted = true;
  }




}
