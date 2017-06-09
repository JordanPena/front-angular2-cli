import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  public title = "O que comove você?";

  constructor(public af: AngularFire, public rotaResultado: Router) { }

  ngOnInit() { }

  clickLink(values: any){
    let newResp = localStorage.getItem('respQuiz');
    let aux = JSON.parse(newResp);

    aux.assistencia += values.assistencia;
    aux.fome += values.fome;
    aux.ambiente += values.ambiente;
    aux.saude += values.saude;
    aux.educacao += values.educacao;
    aux.cultura += values.cultura;
    aux.moradia += values.moradia;
    aux.esporte += values.esporte;

    localStorage.setItem('respQuiz', JSON.stringify(aux));
  }

  postAreas(){
    this.af.auth.subscribe(auth => {
      if(auth) {

        let salveAreas = JSON.parse(localStorage.getItem('respQuiz'));

        //persiste o objeto com metodo set
        firebase.database().ref('resultados/'+ auth.uid).set({
          areas: salveAreas
        });

        this.rotaResultado.navigate(['/resultados/', auth.uid]);
      } else{

      }
    });
  }

}

