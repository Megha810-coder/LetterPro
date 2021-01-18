import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadClearkUpdateComponent } from './head-cleark-update.component';

describe('HeadClearkUpdateComponent', () => {
  let component: HeadClearkUpdateComponent;
  let fixture: ComponentFixture<HeadClearkUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadClearkUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadClearkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
