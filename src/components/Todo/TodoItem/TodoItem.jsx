import React from "react";

export default class TodoItem extends React.Component {
  render() {
    const { text, important, done, onDeleted, onToggleImportant, onToggleDone } = this.props;
    let classNames = 'todo-item__text';

    if (done) classNames += ' text-decoration-line-through';
    if (important) classNames += ' fw-bold';
    
    return (
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <div className="todo-item__content">
            <span className={classNames}>{ text }</span>
          </div>
          <div className="todo-item__btns">
            <button className="btn btn-warning me-1" onClick={onToggleImportant}>
              <i className="bi bi-exclamation-lg"></i>
            </button>
            <button className="btn btn-success me-1" onClick={onToggleDone}>
            <i className="bi bi-check"></i>
            </button>
            <button className="btn btn-danger" onClick={onDeleted}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </li>
    )
  }
}