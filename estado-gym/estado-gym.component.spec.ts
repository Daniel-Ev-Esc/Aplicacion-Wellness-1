import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoGymComponent } from './estado-gym.component';

describe('EstadoGymComponent', () => {
  let component: EstadoGymComponent;
  let fixture: ComponentFixture<EstadoGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoGymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
