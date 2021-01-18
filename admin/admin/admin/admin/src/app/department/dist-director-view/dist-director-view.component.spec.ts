import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistDirectorViewComponent } from './dist-director-view.component';

describe('DistDirectorViewComponent', () => {
  let component: DistDirectorViewComponent;
  let fixture: ComponentFixture<DistDirectorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistDirectorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistDirectorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
