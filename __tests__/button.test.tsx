import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '../utils/test-utils';
import Button from '../src/components/Button';

test('renders content', () => {
  const component = render(<Button>hola</Button>);

  component.getByText('hola');
});
