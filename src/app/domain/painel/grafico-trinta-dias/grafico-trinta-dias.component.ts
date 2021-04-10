import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
    selector: 'app-grafico-trinta-dias',
    templateUrl: './grafico-trinta-dias.component.html'
})
export class GraficoTrintaDiasComponent {

    adicionando(i: number) {
        let myDate = new Date(new Date().getTime() - (i * 24 * 60 * 60 * 1000))

        const teste = moment().subtract(10, "days").format('DD/MM/YYYY');

        var dia = myDate.getDate();
        var mes = myDate.getMonth() + 1;
        
        if(dia < 1) mes = mes - 1; 

        if (dia < 10) var diaConcatenado = "0" + String(dia);
        if (mes < 10) var mesConcatenado = "0" + String(mes);


        return (diaConcatenado + "/" + mesConcatenado);
    }

    public lineChartData: ChartDataSets[] = [
        { data: [0, 0, 40.90, 70, 60, 100, 80], label: "ÚLTIMOS 7 DIAS" }
    ];

    public lineChartLabels: Label[] = [
        this.adicionando(10),
        this.adicionando(5),
        this.adicionando(4),
        this.adicionando(3),
        this.adicionando(2),
        this.adicionando(1),
        this.adicionando(0)
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