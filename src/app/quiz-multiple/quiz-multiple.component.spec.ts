import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMultipleComponent } from './quiz-multiple.component';

describe('QuizMultipleComponent', () => {
  let component: QuizMultipleComponent;
  let fixture: ComponentFixture<QuizMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
