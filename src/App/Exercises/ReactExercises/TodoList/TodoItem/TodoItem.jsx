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
  const {
    id,
    title,
    createdAt,
    author,
    isDone,
    note,
    doneDate,
    getTodoList,
    setEditObject,
    setShowCreateForm,
  } = props;

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

  const [markAsDoneError, setMarkAsDoneError] = useState('');

  const markAsDone = async () => {
    setMarkAsDoneError('');

    requestHandler('PUT', `${id}/markAsDone`)
      .then(() => {
        getTodoList();
      })
      .catch(() => {
        setMarkAsDoneError('Nie udało się ukończyć!');
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
          className="todo-button"
          onClick={() => {
            deleteTodo(id);
          }}
        >
          Delete
        </button>
        <button
          className="todo-button"
          onClick={() => {
            setShowCreateForm(true);
            setEditObject({
              id: id,
              title: title,
              author: author,
              note: note,
            });
          }}
        >
          Edit
        </button>
        <div className="delete-error">{deleteError}</div>
        <ToDoStatus
          isDone={isDone}
          isDoneDate={parseDate(doneDate)}
          markAsDone={markAsDone}
          markAsDoneError={markAsDoneError}
        />
      </div>
    </div>
  );
};
