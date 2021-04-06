import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from './app/core/core.module';
import { IS_PRODUCTION } from './environments/environment';

if (IS_PRODUCTION) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(CoreModule)
    .catch(err => console.error(err));
