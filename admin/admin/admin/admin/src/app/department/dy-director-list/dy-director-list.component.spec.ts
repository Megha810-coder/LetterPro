import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyDirectorListComponent } from './dy-director-list.component';

describe('DyDirectorListComponent', () => {
  let component: DyDirectorListComponent;
  let fixture: ComponentFixture<DyDirectorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyDirectorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyDirectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
