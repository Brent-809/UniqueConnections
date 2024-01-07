import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Register1Page } from './register1.page';

describe('Register1Page', () => {
  let component: Register1Page;
  let fixture: ComponentFixture<Register1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Register1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
