import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthHttp } from 'angular2-jwt';
import { Auth } from '../../providers/auth';
import { Endpoints } from '../../providers/endpoints';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {

  places: any;
  constructor(public navCtrl: NavController, private authHttp: AuthHttp, private auth : Auth, private endpoints : Endpoints) {
    this.getPlaces();
  }

  getPlaces() {
    let obs = this.authHttp.get(this.endpoints.getPlaces()).map(res=>{
      return res.json();
    }).subscribe(
      data=>{
        this.places = data;
      },
      error=>{
        console.log(error);
      },
      ()=>{
        console.log("Completed");
        console.log("places", this.places);
      }
    );
  } 

}
