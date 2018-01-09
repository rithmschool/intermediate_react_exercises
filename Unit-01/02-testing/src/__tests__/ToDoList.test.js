import React from "react";
import ToDoList from "../ToDoList";
import NewToDoForm from "../NewToDoForm";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<ToDoList />", () => {
	it("matches the snapshot", () => {
		var tree = renderer.create(<ToDoList />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("renders the NewToDoForm component", () => {
		const wrapper = shallow(<ToDoList />);
		expect(wrapper.find(NewToDoForm)).toHaveLength(1);
	});

	test("should detect state and all 3 default todos on mounting", () => {
		const wrapper = mount(<ToDoList />);
		expect(wrapper.state("toDos")).toHaveLength(3);
		expect(wrapper.state("keyNum")).toBe(3);
	});

	test("should have 4 todos upon adding", () => {
		const wrapper = mount(<ToDoList />);
		wrapper.instance().handleSubmit("test");
		expect(wrapper.state("toDos")).toHaveLength(4);
		expect(wrapper.state("keyNum")).toBe(4);
	});
});
