import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/http/reporte/reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {
  plataforma: any;
  cantidadJuegos: any;
  datos: any[] = [];

  constructor(private reporteService : ReporteService){}

  ngOnInit(): void {
    this.reporteService.getReporteJuegos().subscribe((dataObtenida: any)=>{
      this.datos = dataObtenida;
    })
   
  }
}
