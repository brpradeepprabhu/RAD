import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rad03ModelSetupComponent } from './rad03-model-setup.component';

describe('Rad03ModelSetupComponent', () => {
  let component: Rad03ModelSetupComponent;
  let fixture: ComponentFixture<Rad03ModelSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rad03ModelSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rad03ModelSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
