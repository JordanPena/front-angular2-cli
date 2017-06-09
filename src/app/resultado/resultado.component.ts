import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  public valorAssistencia: number;
  public valorFome: number;
  public valorAmbiente: number;
  public valorSaude: number;
  public valorEducacao: number;
  public valorMoradia: number;
  public valorEsporte: number;
  public valorCultura: number;
  public urlShare: string;
  public user: any;

  private sub: any;
  private parentRouteId: string;
  private areas: any;

  private subName: any;
  private imgPerfil: any;
  private parentRouteName: string;


  public item: FirebaseObjectObservable<any>;


  constructor(public af: AngularFire, private route: ActivatedRoute, private rotaPerfil: Router) {


  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.parentRouteId = params['id'];
      //console.log(this.parentRouteId);
    });

    this.subName = this.route.params.subscribe(params => {
      this.parentRouteName = params['userName'];
      //console.log(this.parentRouteId);
    });

    this.af.auth.subscribe(auth => {
      if(auth.auth.displayName) {
        this.user = auth.auth;

        console.log('noix', this.user.uid);
        this.rotaPerfil.navigate(['perfil/' + this.parentRouteId]);
      }else{
        console.log('passou');


        this.item = this.af.database.object('resultados/' + this.parentRouteId, { preserveSnapshot: true });
        this.item.subscribe(snapshot =>{

          if(snapshot.val().areas){
            this.areas = snapshot.val().areas;

            this.valorAssistencia = this.areas.assistencia;
            this.valorFome = this.areas.fome;
            this.valorAmbiente = this.areas.ambiente;
            this.valorSaude = this.areas.saude;
            this.valorEducacao = this.areas.educacao;
            this.valorCultura = this.areas.cultura;
            this.valorMoradia = this.areas.moradia;
            this.valorEsporte = this.areas.esporte;
          }else{
            console.log('dataBind fdp!');
          }

        });

      }
    });

  }

  faceRegister(){

    let provider = new firebase.auth.FacebookAuthProvider();
    let faceCred: any;
    let userName: any;
    let imgPerfil: any;

    firebase.auth().signInWithRedirect(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      userName = result.user.displayName;
      imgPerfil = result.user.photoURL;
      if(result.user.displayName) {

        this.salvaPerfil(userName, imgPerfil);

      }

      faceCred = firebase.auth.FacebookAuthProvider.credential(token);

    }).catch(function(error) {

    });


  }

  salvaPerfil(name, imagem){
    let uName: any;

    this.af.auth.subscribe(auth => {
      if(auth.auth.displayName == name) {

        uName = auth.auth.displayName;
        console.log(auth.auth.displayName);

        //persiste o objeto com metodo set
        firebase.database().ref('perfil/').set({
          userName: name,
          photoURL: imagem,
          areas: this.areas
        });

        this.rotaPerfil.navigate(['/perfil/', uName]);
      } else{
        console.log(auth.auth.displayName);
      }
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
