import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdenesComponent }from './paginas/ordenes/ordenes.component';
import { DashboardAdministradorComponent } from './paginas/dashboard-administrador/dashboard-administrador.component';
import { CrearOrdenComponent } from './paginas/crear-orden/crear-orden.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { GraficaComponent } from './paginas/grafica/grafica.component';
import { DashboardInicioComponent } from './paginas/dashboard-inicio/dashboard-inicio.component';

const routes: Routes = [
  { path: 'crear-orden', component: CrearOrdenComponent },
  { path: 'inicio', component: InicioComponent }, 
  { path: 'grafica', component: GraficaComponent }, 
  {
    path: 'dashboard-administrador', component: DashboardAdministradorComponent, children: [
      { path: 'ordenes', component:OrdenesComponent },
    ] 
  },

  {
    path: 'dashboard-inicio', component: DashboardInicioComponent, children: [
      { path: 'grafica', component:GraficaComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
