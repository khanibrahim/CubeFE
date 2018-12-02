import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcanvasComponent } from './qcanvas.component';

describe('QcanvasComponent', () => {
  let component: QcanvasComponent;
  let fixture: ComponentFixture<QcanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
