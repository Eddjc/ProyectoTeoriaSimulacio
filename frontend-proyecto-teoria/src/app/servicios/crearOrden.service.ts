import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class CrearOrdenService {
    urlApi = 'http://localhost:3000/crearOrden/';
  
    constructor(private http: HttpClient) { 
  
    }
  //creacion de metodos para realizar consultas al back-end
    
    guardarOrden(producto:any) {
      return this.http.post(this.urlApi, producto);
    }
}
  