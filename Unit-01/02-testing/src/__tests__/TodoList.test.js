import React from "react";
import localStorage from "mock-local-storage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import TodoList from "../TodoList";
import TodoForm from "../TodoForm";
import Todo from "../Todo";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<TodoList />);
});

test("renders without crashing", () => {
  shallow(<TodoList />);
});

test("matches its snapshot with no todos", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("has a TodoForm", () => {
  expect(wrapper.find(TodoForm)).toHaveLength(1);
});

test("adds Todos via handleAdd", () => {
  wrapper.instance().handleAdd({
    id: 1,
    title: "todo 1",
    description: "description 1"
  });
  wrapper.instance().handleAdd({
    id: 2,
    title: "todo 2",
    description: "description 2"
  });
  expect(wrapper.find(Todo)).toHaveLength(2);
});

test("edits Todos via handleEdit", () => {
  wrapper.setState({
    todos: [
      {
        id: 1,
        title: "another todo",
        description: "none"
      }
    ]
  });
  wrapper.instance().handleEdit(1, {
    title: "new title",
    description: "new description"
  });
  expect(wrapper.state("todos")[0]).toMatchObject({
    title: "new title",
    description: "new description"
  });
});

test("deletes Todos via handleDelete", () => {
  wrapper.setState({
    todos: [
      {
        id: 1,
        title: "another todo",
        description: "none"
      }
    ]
  });
  wrapper.instance().handleDelete(1);
  expect(wrapper.state("todos")).toHaveLength(0);
});

test("toggles boolean props via toggle", () => {
  wrapper.setState({
    todos: [
      {
        id: 1,
        title: "another todo",
        description: "none"
      }
    ]
  });
  wrapper.instance().toggle(1, "isComplete");
  wrapper.instance().toggle(1, "isShowingEditForm");
  expect(wrapper.state("todos")[0]).toMatchObject({
    isComplete: true,
    isShowingEditForm: true
  });
});
