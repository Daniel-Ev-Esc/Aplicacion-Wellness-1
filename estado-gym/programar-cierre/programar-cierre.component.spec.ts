import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramarCierreComponent } from './programar-cierre.component';

describe('ProgramarCierreComponent', () => {
  let component: ProgramarCierreComponent;
  let fixture: ComponentFixture<ProgramarCierreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramarCierreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramarCierreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
