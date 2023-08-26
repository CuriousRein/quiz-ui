import { Component,ElementRef,ViewChild,Renderer2  } from '@angular/core';
import { FormGroup, FormControl,Validators, NgForm } from '@angular/forms';
import { Questionaires } from "../services/questionaires";
import {Questionnaire} from "../models/questions";
@Component({
  selector: 'app-quizform',
  templateUrl: './quizform.component.html',
  styleUrls: ['./quizform.component.css']
})
export class QuizformComponent {
  @ViewChild('quizform') form:NgForm | undefined;

  constructor(private elRef: ElementRef,private renderer: Renderer2, private questions:Questionaires) {
    console.log("test")
    this.questions.getQuestionaires().subscribe(c=>console.log(c));
  }
  questionset: Questionnaire = {
    id:0,
    questionText: '',
    questionType: '',
    trivia: '',
    module: '',
    choices: [],
  };

  quiz = new FormGroup({
      question: new FormControl('', Validators.required),
      choiceOne: new FormControl('', Validators.required),
      choiceTwo: new FormControl('', Validators.required),
      choiceThree: new FormControl('', Validators.required),
      choiceFour: new FormControl('', Validators.required),
      correctAnswer:new FormControl('', Validators.required)
  });
  
  submitQuestionaire(){
    console.log("initiate")
    console.log(this.quiz.value)
    console.log("inside test")
    this.questionset.questionText = this.quiz.value.question!;
    this.questionset.questionType = "Multiple Choices";
    this.questionset.trivia = ""; 
    this.questionset.module = "Module 3"; 
    const choices = [
      { id: 0, name: this.quiz.value.choiceOne, isAnswer: false },
      { id: 0, name: this.quiz.value.choiceTwo, isAnswer: false  },
      { id: 0, name: this.quiz.value.choiceThree, isAnswer: false  },
      { id: 0, name: this.quiz.value.choiceFour, isAnswer: false}
    ];
    var correctAnswer = this.quiz.value.correctAnswer?.toString();
    for (let i=0;i<choices.length;i++) {
      if(i.toString()==correctAnswer){
        console.log(choices[i]);
        choices[i].isAnswer = true;
      }
    }
    this.questionset.choices = choices;
    console.log(this.questionset);
    this.form?.resetForm('');
    this.questions.saveData(this.questionset).subscribe(res => console.log(res))
  }

}

