import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { EmailValidator } from '../../assets/validators/email.validator';


@Component({
  selector: 'app-cadastre',
  templateUrl: './cadastre.component.html',
  styleUrls: ['./cadastre.component.css']
})
export class CadastreComponent implements OnInit {
  public preCadastroForm: FormGroup;


  constructor(private _fb: FormBuilder,private af: AngularFire,
    private rotaPerfil: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.preCadastroForm = this._fb.group({
      email: ['', [Validators.required, EmailValidator.validate] ],
      senha: ['', [Validators.required] ]
    });


  }

  salvar(json){
    console.log(json.value);
    let cred = firebase.auth.EmailAuthProvider.credential(json.value.email, json.value.senha);

    this.af.auth.subscribe(auth => {
      if(auth) {

        auth.auth.link(cred).then(function(user) {
          console.log("email salvo.");
          this.rotaPerfil.navigate(['perfil']);
        }, function(error) {
          console.log("erro", error);
        });

      }else{
        //console.log('logado já');
      }
    });

  }
}
