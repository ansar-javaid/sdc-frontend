import { Component } from '@angular/core';
import { IUserSignup } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public errorMessage: string = '';
  public signupData: IUserSignup = {
    firstName: '',
    lastName: '',
    gender: 1,
    email: '',
    password: ''
  };

  public handleSignup(): void {
    if (!this.signupData.firstName) {
      this.errorMessage = 'Please enter a firstName';
    } else if(!this.signupData.email) {
      this.errorMessage = 'Please enter an email';
    } else if(!this.signupData.password) {
      this.errorMessage = 'Please enter a password';
    } 
    else {
      this.errorMessage = '';
    }
    
  }


}
