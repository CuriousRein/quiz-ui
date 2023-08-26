import { ChangeDetectorRef, Component } from '@angular/core';
import { Questionaires } from "../services/questionaires";
import {Questionnaire} from "../models/questions";
import { FormGroup, FormControl,Validators, NgForm } from '@angular/forms';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz-multiple',
  templateUrl: './quiz-multiple.component.html',
  styleUrls: ['./quiz-multiple.component.css']
})
export class QuizMultipleComponent {
  sellectedAnswer = new FormControl(null);
  current:number = 0;
  config: MatSnackBarConfig = {
    duration: 4000,
    verticalPosition: 'top',
  };
  score:number = 0;
  snackbar!: MatSnackBar;
  wrongAnsQuestions:Questionnaire[]= [];
  questionList: Questionnaire []= [{
    id:0,
    questionText: '',
    questionType: '',
    trivia: '',
    module: '',
    choices: [],
  }];
    constructor(private questions:Questionaires, private cd: ChangeDetectorRef, private snacbar:MatSnackBar, private route: Router){
      this.snackbar =snacbar;
      this.reloadQuestionaires();
    }
    addCounter(){
      
      console.log(this.sellectedAnswer.value)
      
      console.log(this.current)
      if (this.sellectedAnswer.value === null) {
        return;
      }
    
      if(this.current==this.questionList.length-1){
        if(this.sellectedAnswer.value == "true"){
          this.snackbar.open('Correct!', 'Close',this.config);
          this.snackbar.open('Correct!', this.questionList[this.current].trivia,this.config);
          this.score+=1;
          this.questions.reviewer = this.wrongAnsQuestions;
          
        }
        else{
          this.wrongAnsQuestions.push(this.questionList[this.current])
          this.snackbar.open('Sorry, that was incorrect.', 'Close',this.config);
        }
        setTimeout(() => {
          this.snackbar.open("Score: "+this.score+"/"+this.questionList.length, 'Close',this.config);
        }, 3000);
        
        setTimeout(() => {
          this.saveScore()
        }, 5000);
        
      }
      else{
        if(this.sellectedAnswer.value == "true"){
          this.snackbar.open('Correct!\n', 'Close',this.config);
          this.score+=1;
        }
        else{
          this.wrongAnsQuestions.push(this.questionList[this.current]);
          this.snackbar.open('Sorry, that was incorrect. \n', 'Close',this.config);
          this.questions.reviewer = this.wrongAnsQuestions;

        }
        this.current+=1;
        this.sellectedAnswer.setValue(null);
      }
      
    }
    saveScore() {
      const scoresString = localStorage.getItem('scores');
      const scores = scoresString ? JSON.parse(scoresString) : [];
      const scoreData = { score: this.score+"/"+this.questionList.length, date: new Date() };
      scores.push(scoreData);
      localStorage.setItem('scores', JSON.stringify(scores));
      // this.route.navigate(['/review']);
      location.reload();
    }
    
    reloadQuestionaires(){
      this.current = 0;
      this.sellectedAnswer = new FormControl(null);
      this.wrongAnsQuestions = [];
      this.questionList = [];
      this.questions.getQuestionaires().subscribe(data => {
        this.questionList = data;
        // Fisher-Yates shuffle algorithm
        // for (let i = this.questionList.length - 1; i > 0; i--) {
        //   const j = Math.floor(Math.random() * (i + 1));
        //   console.log("random num==="+j);
        //   console.log("iterate num-"+i);
        //   [this.questionList[i], this.questionList[j]] = [this.questionList[j], this.questionList[i]];
        // }

        console.log(this.questionList);
      });
    }
}
