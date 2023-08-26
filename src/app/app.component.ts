import { Component, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuizformComponent } from './quizform/quizform.component';
import { Router } from '@angular/router';
import { QuizMultipleComponent } from "./quiz-multiple/quiz-multiple.component";
export interface questions{
  question: string;
  choices: [];
}
interface Score {
  score: number;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  scores: Score[] = [];
  @ViewChild(QuizMultipleComponent) QuizMultiple: QuizMultipleComponent | undefined;
  constructor(public dialog: MatDialog,private route: Router) {
    const savedScores = JSON.parse(localStorage.getItem('scores') || '[]');
    this.scores = savedScores.map((score: any) => ({
      score: score.score,
      date: new Date(score.date),
    }));
  }
  
  openDialog(){
    this.dialog.open(QuizformComponent);
  }
  startQuiz(){
    //load quiz 
    console.log("restart quiz");
    location.reload();
    
  }
  resetScores(){
    localStorage.removeItem("scores");
    location.reload();
  }
}
