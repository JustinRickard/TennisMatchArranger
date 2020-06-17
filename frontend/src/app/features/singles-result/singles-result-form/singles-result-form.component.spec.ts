import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesResultFormComponent } from './singles-result-form.component';

describe('SinglesResultFormComponent', () => {
  let component: SinglesResultFormComponent;
  let fixture: ComponentFixture<SinglesResultFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglesResultFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglesResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
