import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuestionResultsComponent } from './search-question-results.component';

describe('SearchQuestionResultsComponent', () => {
  let component: SearchQuestionResultsComponent;
  let fixture: ComponentFixture<SearchQuestionResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchQuestionResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchQuestionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
