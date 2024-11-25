import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeeqrPage } from './leeqr.page';

describe('LeeqrPage', () => {
  let component: LeeqrPage;
  let fixture: ComponentFixture<LeeqrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
