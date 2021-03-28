import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRouting } from "src/app/app.router";
import { PainelComponent } from "./painel.component";
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GraficoSeteDiasComponent } from './grafico-sete-dias/grafico-sete-dias.component'
import { GraficoTrintaDiasComponent } from './grafico-trinta-dias/grafico-trinta-dias.component'

@NgModule({
    declarations: [PainelComponent, GraficoSeteDiasComponent, GraficoTrintaDiasComponent ],
    exports: [PainelComponent],
    imports: [
        AppRouting,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        NgbModule
    ],

    bootstrap: [PainelComponent]
})
export class PainelModule {

}