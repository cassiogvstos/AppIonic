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
  private baseApiPath = "http://localhost:8000/api";

  constructor(public http: Http) {
    console.log('Hello ScheduleProvider Provider');
  }

  getLatestSchedule(){
    /*Metodo get para pegar informacões da API e concatenacào com o this.base... 
      que é a url padrão definida acima*/
    return this.http.get(this.baseApiPath + "/usuarios");
  }
}
