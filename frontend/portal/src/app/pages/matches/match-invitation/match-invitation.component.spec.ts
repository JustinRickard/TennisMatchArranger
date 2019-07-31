import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchInvitationComponent } from './match-invitation.component';

describe('MatchInvitationComponent', () => {
  let component: MatchInvitationComponent;
  let fixture: ComponentFixture<MatchInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
