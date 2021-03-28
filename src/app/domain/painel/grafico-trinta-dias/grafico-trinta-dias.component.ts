import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
    selector: 'app-grafico-trinta-dias',
    templateUrl: './grafico-trinta-dias.component.html'
})
export class GraficoTrintaDiasComponent {
    public lineChartData: ChartDataSets[] = [
        { data: [0, 0, 40.90, 70, 60, 100, 80], label: "Últimos 7 Dias" }
    ];

    public lineChartLabels: Label[] = [
        "19/10",
        "20/10",
        "21/10",
        "22/10",
        "23/10",
        "24/10",
        "25/10"
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

    myDate = new Date();

    datas: string[];
    mostrarData() {
        alert(this.myDate.getDate() + " - " + (this.myDate.getMonth() + 1) + " - " + this.myDate.getFullYear());
    }
}