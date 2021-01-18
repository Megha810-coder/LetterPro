import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistDirectorComponent } from './dist-director.component';

describe('DistDirectorComponent', () => {
  let component: DistDirectorComponent;
  let fixture: ComponentFixture<DistDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
