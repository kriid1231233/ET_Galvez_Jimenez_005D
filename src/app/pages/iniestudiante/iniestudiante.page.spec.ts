import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniestudiantePage } from './iniestudiante.page';

describe('IniestudiantePage', () => {
  let component: IniestudiantePage;
  let fixture: ComponentFixture<IniestudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniestudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
