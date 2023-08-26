import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Questionnaire,Choice} from "../models/questions";

@Injectable({
  providedIn: 'root',
})
export class Questionaires {
  readonly url = 'https://localhost:7155/api/Questionaire';
  reviewer:Questionnaire[] =[];
  questionaires: Questionaires | undefined;
  
  constructor(private http: HttpClient) { }

  saveData(quizData:any):Observable<Questionnaire>{
    console.log(quizData)
    return this.http.post<Questionnaire>(this.url,quizData);
  }

  getQuestionaires():Observable<Questionnaire[]>{
    return this.http.get<Questionnaire[]>(this.url);
  }
}