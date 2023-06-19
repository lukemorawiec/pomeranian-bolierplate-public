import { useState } from 'react';
import { requestHandler } from '../requestHandler';
import './TodoItem.css';
import { ToDoStatus } from '../ToDoStatus/ToDoStatus';

const parseDate = (date) => {
  if (date) {
    const dateObj = new Date(date);
    return dateObj.toDateString();
  } else {
    return date;
  }
};

export const TodoItem = (props) => {
  const { id, title, createdAt, author, isDone, note, doneDate, getTodoList } =
    props;

  const [deleteError, setDeleteError] = useState('');

  const deleteTodo = async (selectedId) => {
    requestHandler('DELETE', selectedId)
      .then(() => {
        getTodoList();
      })
      .catch((errorMessage) => {
        setDeleteError(errorMessage);
      });
  };

  return (
    <div className="todo-item">
      <div className="todo-content">
        <div className="todo-title">{title}</div>
        <div>{author}</div>
        <div>{parseDate(createdAt)}</div>
        <p>{note}</p>
      </div>
      <div>
        <button
          onClick={() => {
            deleteTodo(id);
          }}
        >
          Delete
        </button>
        <div className="delete-error">{deleteError}</div>

        <ToDoStatus isDone={isDone} isDoneDate={parseDate(doneDate)} />
      </div>
    </div>
  );
};
