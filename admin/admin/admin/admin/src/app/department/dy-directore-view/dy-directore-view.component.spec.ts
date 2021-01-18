import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyDirectoreViewComponent } from './dy-directore-view.component';

describe('DyDirectoreViewComponent', () => {
  let component: DyDirectoreViewComponent;
  let fixture: ComponentFixture<DyDirectoreViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyDirectoreViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyDirectoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
