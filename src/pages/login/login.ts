import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert(){
    let alert = this.alertCtrl.create({ 
      title: 'Login',
      subTitle: 'Login realizado com Sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }
//REdirecionando para outra página
goToTabsPage(){
  this.navCtrl.push(TabsPage)
}
}
