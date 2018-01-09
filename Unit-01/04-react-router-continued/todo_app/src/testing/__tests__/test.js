import TodoList from '../../todoList'

const wrapper = mount(<TodoList />);

expect(wrapper.find('.clicks-0').length).to.equal(1);

wrapper.find('a').simulate('click');
expect(wrapper.find('.clicks-1').length).to.equal(1);


// const wrapper = mount(<TodoList />);
// expect(wrapper.state().todos.length).to.equal(2);
// expect(wrapper.state('todos')).to.equal(2);