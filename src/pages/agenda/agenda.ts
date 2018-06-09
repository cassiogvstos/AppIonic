import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  public usuario: any=[];
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http
  ){
    
    let url = this.navParams.get('api_url');
    let usuario_id = this.navParams.get('usuario_id');
    // alert(url + usuario_id);
    // console.log(url + usuario_id);
    this.http.get(url + '' + usuario_id)
    /*O map faz parte do heact viex que é uma biblioteca que implementa observables entre outros.
    **Com o map teremos um objeto em formato JSON*/
          .map(res => res.json())
          .subscribe(data => {
              // console.log(data);
              this.usuario = data.user;
              // console.log('teste' + this.usuario);
          });
          
  }
  
}
