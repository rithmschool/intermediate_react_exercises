import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Todo from '../Todo';
import TodoForm from '../TodoForm';
import toJson from 'enzyme-to-json';

let props = {
  id: 1,
  handleDelete() {},
  handleEdit() {},
  toggleComplete() {},
  toggleEditForm() {}
};

it('renders without crashing', () => {
  shallow(<Todo {...props} />);
});

it('matches snapshot when complete', () => {
  const tree = renderer.create(<Todo {...props} isComplete={true} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('matches snapshot when incomplete', () => {
  const tree = renderer.create(<Todo {...props} isComplete={false} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('shows an edit form when editing', () => {
  const wrapper = shallow(<Todo {...props} isShowingEditForm={true} />);
  expect(wrapper.find(TodoForm)).toHaveLength(1);
});
