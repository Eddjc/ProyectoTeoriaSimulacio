import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../servicios/orden.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  ordenes:any = [];
  backendHost: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,private serviceOrden: OrdenService) { }

  ngOnInit(): void {
    // this.httpClient.get(`${this.backendHost}/orden`)
    //   .subscribe(res => {
    //     this.ordenes = res;
    //     console.log(this.ordenes);
    //   });
    this.obtenerOrdenes();
  }

  obtenerOrdenes() {
    this.serviceOrden.obtenerOrdenes()
      .subscribe((data: any) => {
        console.log(data);
          if (!data.mensaje) {
            this.ordenes = data;
            }
    });
  }

  eliminarOrden(idOrden:any){
    this.serviceOrden.eliminarOrden(idOrden)
      .subscribe((res: any) => {
        console.log(res);
        this.obtenerOrdenes();
      });
  
  }

  editarOrden(id:any){

  }

}
