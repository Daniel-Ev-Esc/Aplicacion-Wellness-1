import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafPorcentajeComponent } from './graf-porcentaje.component';

describe('GrafPorcentajeComponent', () => {
  let component: GrafPorcentajeComponent;
  let fixture: ComponentFixture<GrafPorcentajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrafPorcentajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafPorcentajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
