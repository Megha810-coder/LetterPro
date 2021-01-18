import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadClerkViewComponent } from './head-clerk-view.component';

describe('HeadClerkViewComponent', () => {
  let component: HeadClerkViewComponent;
  let fixture: ComponentFixture<HeadClerkViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadClerkViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadClerkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
