import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaAforoComponent } from './grafica-aforo.component';

describe('GraficaAforoComponent', () => {
  let component: GraficaAforoComponent;
  let fixture: ComponentFixture<GraficaAforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaAforoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaAforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
