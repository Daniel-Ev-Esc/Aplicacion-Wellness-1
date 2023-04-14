import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstaSemanaComponent } from './esta-semana.component';

describe('EstaSemanaComponent', () => {
  let component: EstaSemanaComponent;
  let fixture: ComponentFixture<EstaSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstaSemanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
