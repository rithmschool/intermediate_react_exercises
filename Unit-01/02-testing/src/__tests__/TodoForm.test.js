import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TodoForm from '../TodoForm';

let props = {
  handleSubmit() {}
};

test('renders without crashing', () => {
  shallow(<TodoForm {...props} />);
});

test('matches snapshot for new form', () => {
  const tree = renderer.create(<TodoForm {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('matches snapshot for edit form', () => {
  const tree = renderer
    .create(<TodoForm {...props} title="a" description="b" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
