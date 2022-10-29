import { Route } from 'atomic-router-react';

import { $$homePage, HomePage } from './home';

const Pages = () => <Route route={$$homePage.route} view={HomePage} />;

export { Pages };
