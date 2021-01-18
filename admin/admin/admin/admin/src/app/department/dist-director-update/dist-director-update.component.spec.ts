import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistDirectorUpdateComponent } from './dist-director-update.component';

describe('DistDirectorUpdateComponent', () => {
  let component: DistDirectorUpdateComponent;
  let fixture: ComponentFixture<DistDirectorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistDirectorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistDirectorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
