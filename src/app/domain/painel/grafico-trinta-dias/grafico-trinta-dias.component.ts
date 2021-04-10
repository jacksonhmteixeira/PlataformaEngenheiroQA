import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import * as moment from "moment";
import { Color, Label } from "ng2-charts";

@Component({
    selector: 'app-grafico-trinta-dias',
    templateUrl: './grafico-trinta-dias.component.html'
})
export class GraficoTrintaDiasComponent {

    subtraindoData(i: number) {
        return moment().subtract('days', i).format('DD-MM');;
    }

    public lineChartData: ChartDataSets[] = [
        { data: [0, 0, 40.90, 70, 60, 100, 80], label: "ÚLTIMOS 7 DIAS" }
    ];

    public lineChartLabels: Label[] = [
        this.subtraindoData(10),
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
        backgroundColor: "rgba(0,160,0,0.5)"
    }];
    public lineChartLegend = true;
    public lineChartType = "line";
    public lineChartPlugins = [];
}