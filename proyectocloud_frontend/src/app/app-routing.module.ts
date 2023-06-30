import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { ReporteComponent } from './components/reporte/reporte.component';

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'reporte', component: ReporteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
