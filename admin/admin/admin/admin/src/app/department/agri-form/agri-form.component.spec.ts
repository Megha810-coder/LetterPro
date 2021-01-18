import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriFormComponent } from './agri-form.component';

describe('AgriFormComponent', () => {
  let component: AgriFormComponent;
  let fixture: ComponentFixture<AgriFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
