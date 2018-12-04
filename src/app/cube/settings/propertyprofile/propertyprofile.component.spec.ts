import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyprofileComponent } from './propertyprofile.component';

describe('PropertyprofileComponent', () => {
  let component: PropertyprofileComponent;
  let fixture: ComponentFixture<PropertyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
