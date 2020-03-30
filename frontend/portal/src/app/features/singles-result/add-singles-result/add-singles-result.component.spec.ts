import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSinglesResultComponent } from './add-singles-result.component';

describe('AddSinglesResultComponent', () => {
  let component: AddSinglesResultComponent;
  let fixture: ComponentFixture<AddSinglesResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSinglesResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSinglesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
