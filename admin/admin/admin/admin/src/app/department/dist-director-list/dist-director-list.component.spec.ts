import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistDirectorListComponent } from './dist-director-list.component';

describe('DistDirectorListComponent', () => {
  let component: DistDirectorListComponent;
  let fixture: ComponentFixture<DistDirectorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistDirectorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistDirectorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
