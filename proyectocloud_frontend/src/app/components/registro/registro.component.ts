import { Component, OnInit } from '@angular/core';
import { PlataformaService } from 'src/app/services/http/plataformas/plataformas.service';
import { RegistroService } from 'src/app/services/http/registro/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  datos: any[] = [];
  selectedValue: any;
  tituloJuego: string = '';

  constructor(private plataformasService: PlataformaService, private registroService: RegistroService) { }

  guardarJuego(){
    this.registroService.registrarJuego(this.tituloJuego, this.selectedValue).subscribe({
      next: (v)=> console.log("Juego registrado: " + v),
      error: (e)=> console.log("Error al registrar juego: " + e)
    });
   
  }

  ngOnInit(): void {
    this.plataformasService.getPlataformas().subscribe((dataObtenida: any) => {
      this.datos = dataObtenida;
    })
  }
}
