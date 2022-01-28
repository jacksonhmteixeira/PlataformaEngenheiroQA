import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRouting } from "../app.router";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { LoginComponent } from "./login.component";
import { ModalInfoLoginComponent } from "../domain/modal-info-login/modal-info-login.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        AppRouting,
        VMessageModule,
        NgbModule
    ],
    declarations: [ 
        LoginComponent, 
        ModalInfoLoginComponent 
    ],
    exports: [ 
        LoginComponent 
    ],
})
export class LoginModule {

}