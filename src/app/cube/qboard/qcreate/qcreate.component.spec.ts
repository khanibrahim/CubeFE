import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcreateComponent } from './qcreate.component';

describe('QcreateComponent', () => {
  let component: QcreateComponent;
  let fixture: ComponentFixture<QcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
