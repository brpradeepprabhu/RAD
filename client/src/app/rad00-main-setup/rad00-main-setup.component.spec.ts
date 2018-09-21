import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rad00MainSetupComponent } from './rad00-main-setup.component';

describe('Rad00MainSetupComponent', () => {
  let component: Rad00MainSetupComponent;
  let fixture: ComponentFixture<Rad00MainSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rad00MainSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rad00MainSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
