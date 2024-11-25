import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarEventoPage } from './actualizar-evento.page';

describe('ActualizarEventoPage', () => {
  let component: ActualizarEventoPage;
  let fixture: ComponentFixture<ActualizarEventoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
