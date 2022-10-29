import { createHistoryRouter } from 'atomic-router';

import { createBrowserHistory } from 'history';

import { $$homePage } from '@/pages/home';

const history = createBrowserHistory();

const router = createHistoryRouter({
  routes: [
    {
      path: '/',

      route: [$$homePage.route]
    }
  ]
});

router.setHistory(history);

export { router };
