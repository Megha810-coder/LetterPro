import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadClearkLoginComponent } from './head-cleark-login.component';

describe('HeadClearkLoginComponent', () => {
  let component: HeadClearkLoginComponent;
  let fixture: ComponentFixture<HeadClearkLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadClearkLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadClearkLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
