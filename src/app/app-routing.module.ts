import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';

const routes: Routes = [
    {
        path: '/',
        loadChildren: (): Type<CoreModule> => {
            return CoreModule;
        }
    },
    {
        path: 'ceremony',
        loadChildren: async(): Promise<Type<unknown>> => {
            const { CeremonyModule } = await import('./ceremony/ceremony.module');

            return CeremonyModule;
        }
    },
    {
        path: 'reception',
        loadChildren: async(): Promise<Type<unknown>> => {
            const { ReceptionModule } = await import('./reception/reception.module');

            return ReceptionModule;
        }
    },
    {
        path: 'rsvp',
        loadChildren: async(): Promise<Type<unknown>> => {
            const { RsvpModule } = await import('./rsvp/rsvp.module');

            return RsvpModule;
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
