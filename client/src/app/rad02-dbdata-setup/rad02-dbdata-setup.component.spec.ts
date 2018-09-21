import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rad02DbdataSetupComponent } from './rad02-dbdata-setup.component';

describe('Rad02DbdataSetupComponent', () => {
  let component: Rad02DbdataSetupComponent;
  let fixture: ComponentFixture<Rad02DbdataSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rad02DbdataSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rad02DbdataSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
