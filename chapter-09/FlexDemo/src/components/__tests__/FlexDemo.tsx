import React from 'react';
import renderer from 'react-test-renderer';
import FlexDemo from '../FlexDemo';

test('renders correctly', () => {
  const tree = renderer.create(<FlexDemo />).toJSON();

  expect(tree).toMatchSnapshot();
});
