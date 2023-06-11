import { Routes } from "@angular/router";
import { LoginComponent } from "../features/authentication/components/login/login.component";
import { SignupComponent } from "../features/authentication/components/signup/signup.component";
import { ForgotPasswordComponent } from "../features/authentication/components/forgot-password/forgot-password.component";
import { ResumeStepperComponent } from "../features/build-resume/components/resume-stepper/resume-stepper.component";

export const sdcRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'build-resume', component: ResumeStepperComponent},
    
]