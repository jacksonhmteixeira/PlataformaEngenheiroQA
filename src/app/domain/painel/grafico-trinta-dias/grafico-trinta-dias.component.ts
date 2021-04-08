import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
    selector: 'app-grafico-trinta-dias',
    templateUrl: './grafico-trinta-dias.component.html'
})
export class GraficoTrintaDiasComponent implements OnInit {
    
    ultimosSeteDias = [];
    myDate = new Date();

    adicionando(diasArray){
        for(let i = 0; i<7; i++){
            diasArray.push((this.myDate.getDate()-i) + " / " + (this.myDate.getMonth() + 1))
        }
        alert(diasArray);
        return diasArray;
    }

    constructor() { }

    ngOnInit() { 
        //this.ultimosSeteDias = this.identificandoUltimosSeteDias(this.ultimosSeteDias);
        this.ultimosSeteDias = this.adicionando(this.ultimosSeteDias);
    }
    
    public lineChartData: ChartDataSets[] = [
        { data: [0, 0, 40.90, 70, 60, 100, 80], label: "Últimos 7 Dias" }
    ];

    public lineChartLabels: Label[] = [
        this.ultimosSeteDias[0],
        this.ultimosSeteDias[1],
        this.ultimosSeteDias[2],
        this.ultimosSeteDias[3],
        this.ultimosSeteDias[4],
        this.ultimosSeteDias[5],
        this.ultimosSeteDias[6]
    ];

    public lineChartOptions: ChartOptions = {
        responsive: true
    };

    public lineChartColors: Color[] = [{
        borderColor: "#343A40",
        backgroundColor: "rgba(0,160,0,0.5)"
    }];
    public lineChartLegend = true;
    public lineChartType = "line";
    public lineChartPlugins = [];
}