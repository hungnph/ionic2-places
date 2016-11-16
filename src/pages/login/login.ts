import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Routes } from '../../app/app.routes';

import {Auth} from '../../providers/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email : string;
  password: string;
  error : string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private auth : Auth) {}

  goTabs(){
    this.navCtrl.push(Routes.getPage(Routes.TABS));
  }

  login() : void {
    this.auth.login({email:this.email,password:this.password }).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      },
      () => {
        console.log("Rien");
        this.goTabs();
      }
    );
  }

  signUp() : void {
    let signUpPage = Routes.getPage(Routes.SIGNUP);
    let signUpModal = this.modalCtrl.create(signUpPage);
    signUpModal.present();
  }
}
