import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganzieComponent } from './organzie.component';

describe('OrganzieComponent', () => {
  let component: OrganzieComponent;
  let fixture: ComponentFixture<OrganzieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganzieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganzieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
