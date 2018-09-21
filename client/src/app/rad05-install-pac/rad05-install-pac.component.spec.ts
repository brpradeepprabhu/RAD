import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rad05InstallPacComponent } from './rad05-install-pac.component';

describe('Rad05InstallPacComponent', () => {
  let component: Rad05InstallPacComponent;
  let fixture: ComponentFixture<Rad05InstallPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rad05InstallPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rad05InstallPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
