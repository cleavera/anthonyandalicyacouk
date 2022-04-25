import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { InputDishComponent } from './components/input-dish/input-dish.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputOptionsComponent } from './components/input-options/input-options.component';
import { InputStringComponent } from './components/input-string/input-string.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';

@NgModule({
    exports: [
        ButtonComponent,
        InputDishComponent,
        InputNumberComponent,
        InputOptionsComponent,
        InputStringComponent,
        InputTextComponent,
        SaveButtonComponent
    ],
    declarations: [
        ButtonComponent,
        InputDishComponent,
        InputNumberComponent,
        InputOptionsComponent,
        InputStringComponent,
        InputTextComponent,
        SaveButtonComponent
    ],
    imports: [CommonModule]
})
export class FormModule {
}
