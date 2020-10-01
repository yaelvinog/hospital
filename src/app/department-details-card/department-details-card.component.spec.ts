import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailsCardComponent } from './department-details-card.component';

describe('DepartmentDetailsCardComponent', () => {
  let component: DepartmentDetailsCardComponent;
  let fixture: ComponentFixture<DepartmentDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
