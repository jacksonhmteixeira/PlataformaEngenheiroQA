import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRouting } from "src/app/app.router";
import { PainelComponent } from "./painel.component";
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GraficoTrintaDiasComponent } from './grafico-sete-dias/grafico-sete-dias.component'
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import { CommonModule } from "@angular/common";
 
export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "right",
    allowNegative: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: "."
};

@NgModule({
    declarations: [PainelComponent, GraficoTrintaDiasComponent ],
    exports: [PainelComponent],
    imports: [
        AppRouting,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        NgbModule,
        CurrencyMaskModule,
        CommonModule
    ],
    bootstrap: [PainelComponent],
    providers: [
        { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
    ],
})
export class PainelModule {

}