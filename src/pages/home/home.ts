import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AgendaPage } from '../agenda/agenda';
import { Http } from '@angular/http';
//Utilizando a biblioteca para mapear a response 
import 'rxjs/add/operator/map';
import { CadastrarPage } from '../cadastrar/cadastrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = 'https://apinode-2.herokuapp.com';
  public usuarios: any[];
  
  constructor(
    public navCtrl: NavController,
    public http: Http
  ){
    this.http.get(this.url + '/usersRoute')
  /*O map faz parte do heact viex que é uma biblioteca que implementa observables entre outros.
  **Com o map teremos um objeto em formato JSON*/
        .map(res => res.json())
        .subscribe(data => {
            console.log(data);
            this.usuarios = data.todosUsuarios;
        });
   }

   goToCadastrar(){
     this.navCtrl.push(CadastrarPage);
   }

    getUsuario(_id){
      // alert(_id);
      console.log(_id);
      this.navCtrl.push(AgendaPage,
      {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        'usuario_id': _id,
        'api_url': this.url
      }); 
    }
}