import React from "react";
import PropTypes from "prop-types";
import "./Todo.css";
import { Link } from "react-router-dom";

const Todo = ({
  id,
  isComplete,
  title,
  description,
  handleDelete,
  toggleComplete,
  handleEdit
}) => {
  let complete = isComplete ? "complete" : "";
  let buttonText = isComplete ? "incomplete" : "complete";

  return (
    <div className={`Todo ${complete}`}>
      <h3>
        <Link to={`/todos/${id}`}>{title}</Link>
      </h3>
      <p>{description}</p>
      <div className="button-wrapper">
        <button className="complete-button" onClick={toggleComplete}>
          Mark as {buttonText}
        </button>
        <button className="remove-button" onClick={handleDelete}>
          Delete this todo
        </button>
        <Link className="edit-button" to={`/todos/${id}/edit`}>
          Edit this todo
        </Link>
      </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

Todo.defaultProps = {
  title: "",
  description: "",
  isComplete: false
};

export default Todo;
