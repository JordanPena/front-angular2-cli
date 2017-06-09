import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let areas = {educacao: 0, fome: 0, assistencia: 0, moradia: 0, ambiente: 0, saude: 0,cultura: 0, esporte:0};
    localStorage.setItem('respQuiz', JSON.stringify(areas));
  }
}
