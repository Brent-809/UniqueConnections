import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivityPage } from './activity.page';

describe('ActivityPage', () => {
  let component: ActivityPage;
  let fixture: ComponentFixture<ActivityPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
