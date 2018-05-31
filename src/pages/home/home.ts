import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController){
    // this.http.get(this.url + '/usuarios')
    //   /*O map faz parte do heact viex que é uma biblioteca que implementa observables entre outros*/
    //          .map(res => res.json())
    //          .subscribe(data => {
    //             console.log(data);
    //          });
   }
}