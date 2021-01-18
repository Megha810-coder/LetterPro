import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyDerectorComponent } from './dy-derector.component';

describe('DyDerectorComponent', () => {
  let component: DyDerectorComponent;
  let fixture: ComponentFixture<DyDerectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyDerectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyDerectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
