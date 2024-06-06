import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';

import { MyApp } from './my-app';

Aurelia
    .register(
        RouterConfiguration.customize({
            useUrlFragmentHash: false,
            title: {
                appTitle: "${componentTitles}${appTitleSeparator}Aurelia Vite UNOCSS"
            }
        })
    )
    .app(MyApp).start();
