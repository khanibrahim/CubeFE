import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonmasterComponent } from './lessonmaster.component';

describe('LessonmasterComponent', () => {
  let component: LessonmasterComponent;
  let fixture: ComponentFixture<LessonmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
