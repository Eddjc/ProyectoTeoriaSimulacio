import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdenService } from 'src/app/servicios/orden.service';

@Component({
  selector: 'app-sidebard-inicio',
  templateUrl: './sidebard-inicio.component.html',
  styleUrls: ['./sidebard-inicio.component.css']
})
export class SidebardInicioComponent implements OnInit {

  ordenes:any = [];

  formularioOrden = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    estaturaMadre: new FormControl('',[Validators.required]),
    estaturaPadre: new FormControl('',[Validators.required]),
    comentario: new FormControl('',[Validators.required]),
    
  });

  constructor(private serviceOrden: OrdenService, private HttpClient: HttpClient ) { }

  ngOnInit(): void {
    // this.serviceOrden.obtenerOrdenes().subscribe((data: any) => {

    //   console.log(data);
    //   if (!data.mensaje) {
    //     this.ordenes = data
    //   }

    // });
    this.obtenerOrdenes();
  }

  obtenerOrdenes() {
    this.serviceOrden.obtenerOrdenes().subscribe((data: any) => {

      console.log(data);
      if (!data.mensaje) {
        this.ordenes = data
      }

    });
  }

  guardar(){
    console.log(this.formularioOrden.value);
    this.serviceOrden.guardarOrden({data:this.formularioOrden.value})
      .subscribe((res:any) =>{
        console.log(res);
        this.obtenerOrdenes();

      });
  }
}
