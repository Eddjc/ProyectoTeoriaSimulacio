import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { OrdenService } from 'src/app/servicios/orden.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartData1:any = []; 
  public barChartLabels: Label[] = ['0','5', '10', '15', '20', '25', '30', '35', '40', '45', '50','55','60','65','70'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins:any = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data:[0,70,100,160,170,170,170,170,170,165,160,160,155,150,150,150], label: 'Altura' },
    { data:[0,40,80,128,170], label: 'Altura2' }
  ];

  constructor(private serviceOrden: OrdenService) { }
  ngOnInit(): void { 
    //this.obtenerOrdenes();
  }

   obtenerOrdenes() {
     this.serviceOrden.obtenerOrdenes().subscribe((data: any) => {

      console.log(data);
       if (!data.mensaje) {
         this.barChartData1 = data
       }

    });
   }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  calcularEstatura(estaturaMadre:any,estaturaPadre:any,sexo:any){
    
    var s = estaturaMadre + estaturaPadre ;
    var z = 13;
    var estaturaFinal = 0;
    var sexoM: string = 'niño'; 

    if (sexo = sexo )
        estaturaFinal = s + z / 2
    else
        estaturaFinal = s -z / 2

    this.barChartData1.push(estaturaFinal);
  }
}


