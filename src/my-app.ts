import { IEventAggregator, resolve } from 'aurelia';

import type { IRoute } from '@aurelia/router';

import "virtual:uno.css";
import '@unocss/reset/tailwind.css';

import nProgress from "nprogress";
import "./css/nprogress.css";

export class MyApp {
  static routes: IRoute[] = [
    {
      path: "",
      component: () => import('./pages/home'),
      title: 'Home',
    }
  ];

  private readonly ea: IEventAggregator = resolve(IEventAggregator);

  attached() {
    this.subscribeNavigationStart();
    this.subscribeNavigationComplete();
  }

  subscribeNavigationStart() {
    this.ea.subscribe('au:router:navigation-start', () => {
      nProgress.start();
    });
  }

  subscribeNavigationComplete() {
    this.ea.subscribe('au:router:navigation-end', () => {
      window.scrollTo(0, 0);
      nProgress.done();
    });
  }
}
