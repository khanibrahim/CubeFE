import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QBoardComponent } from './qboard.component';

describe('QBoardComponent', () => {
  let component: QBoardComponent;
  let fixture: ComponentFixture<QBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
