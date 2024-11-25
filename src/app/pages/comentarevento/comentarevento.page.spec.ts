import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComentareventoPage } from './comentarevento.page';

describe('ComentareventoPage', () => {
  let component: ComentareventoPage;
  let fixture: ComponentFixture<ComentareventoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentareventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
