import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Auth} from '../../providers/auth';
import {Routes} from '../../app/app.routes'
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {

  email:string;
  password:string;
  error:string;
  constructor(public navCtrl: NavController, private auth: Auth) {}

  signUp() : void {
    this.auth.signup({email:this.email,password:this.password })
     .then((success)=>{
       this.goTabs();
     },(error)=>{
       this.error = error._body;
     });
  }
  goTabs() {
    this.navCtrl.push(Routes.getPage(Routes.TABS));
  }

}
