import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the ScheduleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

/*TODA CLASSE QUE TIVER O @INJECTABLE() SERÁ UTILIZADA POR OUTRA CLASSE 
  ISSO É UMA INJECÃO DE DEPENDENCIAS */
@Injectable()
export class ScheduleProvider {
  //Define a url inicial da API que será consumida
  private url:string='http://localhost:8000/api';
  public usuarios: Array<{}>;

  constructor(public http: Http) {
    this.http.get(this.url + '/usuarios')
      /*O map faz parte do heact viex que é uma biblioteca que implementa observables entre outros*/
             .map(res => res.json())
             .subscribe(data => {
                console.log(data);
             });
  }

  getLatestSchedule(){
   
  }
}
