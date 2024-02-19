import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IonicModule } from '@ionic/angular';
import * as CanvasJSAngularChart from 'src/app/lib/canvasjs.angular.component';
import { EstadisticasNombreComponent } from './components/estadisticas-nombre/estadisticas-nombre.component';
import { CarteleraPeliculasComponent } from './components/cartelera-peliculas/cartelera-peliculas.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    CanvasJSChart,
    DashboardComponent,
    CarteleraPeliculasComponent,
    EstadisticasNombreComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IonicModule
  ]
})
export class DashboardModule { }
