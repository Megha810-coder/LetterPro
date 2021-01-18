import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyDirectorUpdateComponent } from './dy-director-update.component';

describe('DyDirectorUpdateComponent', () => {
  let component: DyDirectorUpdateComponent;
  let fixture: ComponentFixture<DyDirectorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyDirectorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyDirectorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
