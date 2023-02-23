import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveOrDisqualifyOpinionnComponent } from './approve-or-disqualify-opinionn.component';

describe('ApproveOrDisqualifyOpinionnComponent', () => {
  let component: ApproveOrDisqualifyOpinionnComponent;
  let fixture: ComponentFixture<ApproveOrDisqualifyOpinionnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveOrDisqualifyOpinionnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveOrDisqualifyOpinionnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
