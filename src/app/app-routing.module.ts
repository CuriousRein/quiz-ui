import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'review', component: ReviewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
