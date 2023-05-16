import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/AppState';
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from 'src/store/login/login.actions';
import { ToastController } from '@ionic/angular';
import { LoginState } from 'src/store/login/LoginState';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  form!: FormGroup;

  // 
  constructor(private router: Router, private formBuilder:FormBuilder, private store:Store<AppState>, 
    private toastController:ToastController, private authService: AuthService) {}

  ngOnInit(){
    this.form = new LoginPageForm(this.formBuilder).createForm();

    this.store.select('login').subscribe(async loginState=>{
      this.onIsRecoveredPassword(loginState);
      this.onIsRecoveringPassword(loginState);
      this.onIsRecoveredPasswordFail(loginState);
    })
  }

  private onIsRecoveringPassword(loginState:LoginState){
    if(loginState.isRecoveringPassword){
      this.authService.recoverEmailPassword(this.form.get('email')?.value).subscribe(()=>{
        this.store.dispatch(recoverPasswordSuccess());
      }, (error): void=>{
        this.store.dispatch(recoverPasswordFail())
      });
    }
  }
  // private onIsRecoveringPassword(loginState:LoginState){
  //   if(loginState.isRecoveringPassword){
  //     this.authService.recoverEmailPassword(this.form.get('email')?.value).subscribe(()=>{
  //       this.store.dispatch(recoverPasswordSuccess());
  //     }, (error): void=>{
  //       this.store.dispatch(recoverPasswordFail({error}))
  //     });
  //   }
  // }

  private async onIsRecoveredPassword(loginState:LoginState){
    if(loginState.isRecoveredPassword) {
      const toaster=await this.toastController.create({
        position:"bottom",
        message:"Recovery email sent",
        color:"primary"
      });
      toaster.present();
    } 
  }

  private async onIsRecoveredPasswordFail(loginState:LoginState){
    if(loginState.error) {
      const toaster=await this.toastController.create({
        position:"bottom",
        message:"Email not found",
        color:"primary"
      });
      toaster.present();
    } 
  }

  forgotEmailPassword(){
    this.store.dispatch(recoverPassword());
  }


  login(){
   // this.store.dispatch(login());
    this.router.navigate(['/tabs/tab2']);
  }
  register(){
    this.router.navigate(['register']);
  }

}
