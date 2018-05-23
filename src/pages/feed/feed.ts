import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
//Criar uma variavel com modificador de acesso public para que o HTML consiga enxergar
public nomeDoUsuario:String = "Cassio pagina de feed";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //Exemplo de como somar dois valores
  public somaDeDoisNumeros(num1: number, num2: number): void{
    // alert(num1 + num2);
  }

  ionViewDidLoad() {
    // this.somaDeDoisNumeros(100, 200);
  }

}
