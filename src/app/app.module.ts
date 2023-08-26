import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialExampleModule } from 'src/material.module';
import { Questionaires } from './services/questionaires';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizformComponent } from './quizform/quizform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuizMultipleComponent } from './quiz-multiple/quiz-multiple.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
@NgModule({
  declarations: [
    AppComponent,
    QuizformComponent,
    QuizMultipleComponent,
    ReviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [Questionaires],
  bootstrap: [AppComponent]
})
export class AppModule { }
