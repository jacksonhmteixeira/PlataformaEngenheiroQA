import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRouting } from "src/app/app.router";
import { PainelComponent } from "./painel.component";
import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [ PainelComponent ],
    exports: [ PainelComponent ],
    imports: [
        AppRouting,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule
    ]
})
export class PainelModule {

}