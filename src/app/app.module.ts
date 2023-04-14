import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { DatepipeComponent } from './datepipe/datepipe.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AforoComponent } from './aforo/aforo.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { MisReservacionesComponent } from './mis-reservaciones/mis-reservaciones.component';
import { TitleComponent } from './title/title.component';
import { GraficaAforoComponent } from './grafica-aforo/grafica-aforo.component';
import { EstadoComponent } from './estado/estado.component';
import { EstaSemanaComponent } from './esta-semana/esta-semana.component';
import { EstimacionesComponent } from './estimaciones/estimaciones.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ListaDeporteComponent } from './lista-deporte/lista-deporte.component';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    DatepipeComponent,
    AforoComponent,
    ReservacionesComponent,
    MisReservacionesComponent,
    TitleComponent,
    GraficaAforoComponent,
    EstadoComponent,
    EstaSemanaComponent,
    EstimacionesComponent,
    BarraNavegacionComponent,
    ListaDeporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
