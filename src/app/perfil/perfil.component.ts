import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public item: FirebaseObjectObservable<any>;
  public imgPerfil: any;
  public nome: string;
  public valorAssistencia: number;
  public valorFome: number;
  public valorAmbiente: number;
  public valorSaude: number;
  public valorEducacao: number;
  public valorCultura: number;
  public valorEsporte: number;
  public valorMoradia: number;
  public subName: any;
  public parentRouteName: string;

  constructor(private af: AngularFire, private route: ActivatedRoute) { }

  ngOnInit() {
      this.subName = this.route.params.subscribe(params => {
      this.parentRouteName = params['id'];
      console.log(this.parentRouteName);
    });

    this.af.auth.subscribe(auth => {

      if(auth){
        this.imgPerfil = auth.auth.photoURL;
        this.nome = auth.auth.displayName;

        this.item = this.af.database.object('resultados/' + this.parentRouteName, {  preserveSnapshot: true });

        this.item.subscribe(snapshot =>{

          let aux = snapshot.val().areas;

          this.valorAssistencia = aux.assistencia;
          this.valorFome = aux.fome;
          this.valorAmbiente = aux.ambiente;
          this.valorSaude = aux.saude;
          this.valorEducacao = aux.educacao;
          this.valorCultura = aux.cultura;
          this.valorMoradia = aux.moradia;
          this.valorEsporte = aux.esporte;

        });
      }



    });

  }

}
