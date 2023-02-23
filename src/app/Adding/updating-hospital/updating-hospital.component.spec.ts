import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingHospitalComponent } from './updating-hospital.component';

describe('UpdatingHospitalComponent', () => {
  let component: UpdatingHospitalComponent;
  let fixture: ComponentFixture<UpdatingHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatingHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatingHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
