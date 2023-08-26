import { Component } from '@angular/core';
import { Questionaires } from "../services/questionaires";
import {Questionnaire} from "../models/questions";

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent {
  reviewer:Questionnaire[] =[];
  constructor(private questions:Questionaires){
    this.reviewer = this.questions.reviewer;
  }
  getCorrectAnswer(questionnaire: Questionnaire): string {
    const correctChoices = questionnaire.choices.filter(choice => choice.isAnswer);
    console.log(correctChoices);
    return correctChoices.map(choice => choice.name).join(', ');
  }
}
