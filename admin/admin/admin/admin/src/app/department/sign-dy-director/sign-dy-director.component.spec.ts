import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDyDirectorComponent } from './sign-dy-director.component';

describe('SignDyDirectorComponent', () => {
  let component: SignDyDirectorComponent;
  let fixture: ComponentFixture<SignDyDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignDyDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDyDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
