import { render } from '@testing-library/react';

import { App } from './app';

describe('<App/>', () => {
  it('should render without error', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
