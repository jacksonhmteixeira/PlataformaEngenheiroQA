import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouting } from 'src/app/app.router';
import { MercadoComponent } from './mercado.component';

@NgModule({
    declarations: [ MercadoComponent ],
    exports: [ MercadoComponent ],
    imports: [ 
        FormsModule,
        ReactiveFormsModule,
        AppRouting
    ]
})
export class MercadoModule {

}