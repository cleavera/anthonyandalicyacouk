import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CeremonyPageComponent } from './components/ceremony-page/ceremony-page.component';

const routes: Routes = [
    {
        path: '',
        component: CeremonyPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CeremonyRoutingModule {
}
