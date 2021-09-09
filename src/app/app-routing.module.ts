import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';

const routes: Routes = [
    {
        path: '/',
        loadChildren: (): Type<CoreModule> => {
            return CoreModule;
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
