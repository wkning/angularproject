import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinlunComponent } from './pinlun.component';

describe('PinlunComponent', () => {
  let component: PinlunComponent;
  let fixture: ComponentFixture<PinlunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinlunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinlunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
