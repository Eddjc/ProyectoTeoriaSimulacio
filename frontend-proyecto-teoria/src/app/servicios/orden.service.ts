import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class OrdenService {
  [x: string]: any;
  value(value: any) {
    throw new Error('Method not implemented.');
  }
    urlApi = 'http://localhost:3000/orden/';
  
    constructor(private http: HttpClient) { 
  
    }
  //creacion de metodos para realizar consultas al back-end
    obtenerOrdenes() {
      return this.http.get(this.urlApi);
    }
  
    obtenerOrden(id:any) {
      return this.http.get(this.urlApi + id);
    }
  
    guardarOrden(producto:any) {
      return this.http.post(this.urlApi, producto);
    }
  
  
  eliminarOrden(idOrden:any){
    return this.http.delete(this.urlApi + idOrden)
  
  }  
}
  