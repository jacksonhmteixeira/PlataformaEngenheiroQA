import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRouting } from "src/app/app.router";
import { UsuarioComponent } from "./usuario.component";

@NgModule({
    declarations: [ UsuarioComponent ],
    exports: [ UsuarioComponent ],
    imports: [
        AppRouting,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class UsuarioModule {

}