import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriViewComponent } from './agri-view.component';

describe('AgriViewComponent', () => {
  let component: AgriViewComponent;
  let fixture: ComponentFixture<AgriViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
