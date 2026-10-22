/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly and disposes its animation timers', () => {
  jest.useFakeTimers();
  const component = renderer.create(<App />);
  expect(component.toJSON()).toBeTruthy();
  component.unmount();
  jest.clearAllTimers();
  jest.useRealTimers();
});
