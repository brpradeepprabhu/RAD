import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rad04UiSetupComponent } from './rad04-ui-setup.component';

describe('Rad04UiSetupComponent', () => {
  let component: Rad04UiSetupComponent;
  let fixture: ComponentFixture<Rad04UiSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rad04UiSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rad04UiSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
