import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceptionPageComponent } from './components/reception-page/reception-page.component';

const routes: Routes = [
    {
        path: '',
        component: ReceptionPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReceptionRoutingModule {
}
