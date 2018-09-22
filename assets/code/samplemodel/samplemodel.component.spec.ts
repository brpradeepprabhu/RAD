import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplemodelComponent } from './samplemodel.component';

describe('SamplemodelComponent', () => {
  let component: SamplemodelComponent;
  let fixture: ComponentFixture<SamplemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplemodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
