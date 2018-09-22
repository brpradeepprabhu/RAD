import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rad06CompleteComponent } from './rad06-complete.component';

describe('Rad06CompleteComponent', () => {
  let component: Rad06CompleteComponent;
  let fixture: ComponentFixture<Rad06CompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rad06CompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rad06CompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
