import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDistDirectorComponent } from './sign-dist-director.component';

describe('SignDistDirectorComponent', () => {
  let component: SignDistDirectorComponent;
  let fixture: ComponentFixture<SignDistDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignDistDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDistDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
