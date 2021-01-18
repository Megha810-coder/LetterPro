import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignHeadClkComponent } from './sign-head-clk.component';

describe('SignHeadClkComponent', () => {
  let component: SignHeadClkComponent;
  let fixture: ComponentFixture<SignHeadClkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignHeadClkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignHeadClkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
