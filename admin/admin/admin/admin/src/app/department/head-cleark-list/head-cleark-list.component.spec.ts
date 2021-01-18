import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadClearkListComponent } from './head-cleark-list.component';

describe('HeadClearkListComponent', () => {
  let component: HeadClearkListComponent;
  let fixture: ComponentFixture<HeadClearkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadClearkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadClearkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
