import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeporteComponent } from './lista-deporte.component';

describe('ListaDeporteComponent', () => {
  let component: ListaDeporteComponent;
  let fixture: ComponentFixture<ListaDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
