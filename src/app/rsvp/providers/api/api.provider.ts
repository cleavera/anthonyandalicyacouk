import { Provider } from '@angular/core';
import { Api } from '@skimp/client';

import { API_TOKEN } from './api.token';

export const API_PROVIDER: Provider = {
    provide: API_TOKEN,
    useFactory() {
        const api: Api = new Api('https://anthonyandalicyadomain.azurewebsites.net');

        api.setAuthorisationHeader('PAT: #{PAT}#');

        return api;
    }
};
