import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public item: FirebaseObjectObservable<any>;
  public areas: any;

  constructor(public af: AngularFire, public rotaLogado: Router) {
    this.userlogado();
  }

  ngOnInit() {
    this.logar();
  }

  userlogado(){

    this.af.auth.subscribe(auth => {
      if(auth) {

        this.item = this.af.database.object('resultados/' + auth.uid, { preserveSnapshot: true });

        this.item.subscribe(snapshot =>{
          if(snapshot.val()){
            //console.log(snapshot.val());
            if(snapshot.val().areas != 0){
              this.rotaLogado.navigate(['/resultados/'+ auth.uid]);
            }
          }else{
            //console.log('areas null');
          }
        });
      } else {
        //console.log('user off');
      }
    });

  }

  logar(){
    this.af.auth.subscribe(auth => {
      if(!auth) {
        //console.log('logado agr');
        this.af.auth.login({
          provider: AuthProviders.Anonymous,
          method: AuthMethods.Anonymous
        });
      }else{
        //console.log('logado já');
      }
    });
  }

}





