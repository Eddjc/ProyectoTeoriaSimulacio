import { Component, OnInit } from '@angular/core';
import {OrdenService} from '../../servicios/orden.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {

  formularioOrden = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required])

  });

  constructor(private serviceOrden: OrdenService) { }

  ngOnInit(): void {
  }

  registrar(){
    this.serviceOrden.guardarOrden(this.formularioOrden.value)
      .subscribe((data:any) => {
        console.log(data);
      });
  }

}