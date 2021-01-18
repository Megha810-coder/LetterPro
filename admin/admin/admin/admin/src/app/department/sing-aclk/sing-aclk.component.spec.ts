import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingAclkComponent } from './sing-aclk.component';

describe('SingAclkComponent', () => {
  let component: SingAclkComponent;
  let fixture: ComponentFixture<SingAclkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingAclkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingAclkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
