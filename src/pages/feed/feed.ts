import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScheduleProvider } from '../../providers/schedule/schedule';

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
  /*O PROVIDERS É O PROVEDOR DE INFORMACÃO, PARA QUE A PÁGINA SAIBA QUE ELE EXISTE TEMOS
  QUE DECLARA-LO AQUI */
  providers: [
    /*AQUI TEMOS QUE INSTANCIAR O PROVIDER O QUE FAZ A INJECÃO É O NOME DA CLASSE*/
    ScheduleProvider
  ]
})
export class FeedPage {
//Criando um objeto que será utilizado pelo JSON  
  public objeto_feed = {
    titulo: "Cassio",
    data: "October 27, 1988",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }
//Criar uma variavel com modificador de acesso public para que o HTML consiga enxergar
public nomeDoUsuario:String = "Cassio pagina de feed";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private agendaProvider: ScheduleProvider) {
    }
  //Exemplo de como somar dois valores
  public somaDeDoisNumeros(num1: number, num2: number): void{
    // alert(num1 + num2);
  }

  ionViewDidLoad() {
    // this.somaDeDoisNumeros(100, 200);
    this.agendaProvider.getLatestSchedule().subscribe(
      data=>{
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

}
