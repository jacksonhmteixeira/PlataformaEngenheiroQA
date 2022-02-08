import { Component } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import * as moment from "moment";
import { Color, Label } from "ng2-charts";

@Component({
    selector: 'app-grafico-sete-dias',
    templateUrl: './grafico-sete-dias.component.html'
})
export class GraficoTrintaDiasComponent {

    subtraindoData(i: number) {
        return moment().subtract('days', i).format('DD/MM/YYYY');;
    }

    retornandoNumero() {
        return Math.random() * 100;
    }

    public lineChartData: ChartDataSets[] = [
        { 
            data: [
                this.retornandoNumero(),
                this.retornandoNumero(),
                this.retornandoNumero(),
                this.retornandoNumero(),
                this.retornandoNumero(),
                this.retornandoNumero(),
                this.retornandoNumero()
            ], 
            label: "VENDAS DOS ÚLTIMOS 7 DIAS" 
        }
    ];

    public lineChartLabels: Label[] = [
        this.subtraindoData(6),
        this.subtraindoData(5),
        this.subtraindoData(4),
        this.subtraindoData(3),
        this.subtraindoData(2),
        this.subtraindoData(1),
        this.subtraindoData(0)
    ];


    public lineChartOptions: ChartOptions = {
        responsive: true
    };

    public lineChartColors: Color[] = [{
        borderColor: "#343A40",
        backgroundColor: "#24CC67"
    }];
    public lineChartLegend = true;
    public lineChartType = "line";
    public lineChartPlugins = [];
}