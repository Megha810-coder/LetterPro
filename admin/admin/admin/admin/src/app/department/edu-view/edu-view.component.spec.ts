import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduViewComponent } from './edu-view.component';

describe('EduViewComponent', () => {
  let component: EduViewComponent;
  let fixture: ComponentFixture<EduViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
