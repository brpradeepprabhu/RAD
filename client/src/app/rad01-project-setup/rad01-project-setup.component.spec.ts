import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rad01ProjectSetupComponent } from './rad01-project-setup.component';

describe('Rad01ProjectSetupComponent', () => {
  let component: Rad01ProjectSetupComponent;
  let fixture: ComponentFixture<Rad01ProjectSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rad01ProjectSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rad01ProjectSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
