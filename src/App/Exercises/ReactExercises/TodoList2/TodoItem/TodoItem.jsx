import axios from 'axios';
import { formatDate } from '../../../../../helpers/formatDate';
import { BinIcon } from '../../../../Images/Icons/BinIcon/BinIcon';
import './TodoItem.css';
import { BASE_API_URL } from '../TodoList2';
import { useState } from 'react';

export function TodoItem({ todo, handleFetchTodoData }) {
  const { id, title, author, createdAt, isDone, doneDate, note } = todo;
  const [isRemoveError, setRemoveError] = useState(false);

  const itemClasses = `todo-item ${isDone ? 'todo-item--darker' : ''}`;

  function handleRemoveClick() {
    axios
      .delete(BASE_API_URL + '/todo/' + id)
      .then(() => {
        handleFetchTodoData();
      })
      .catch(() => {
        setRemoveError(true);
      });
  }

  return (
    <div className={itemClasses}>
      <div className="todo-item__wrapper">
        <h3 className="todo-item__wrapper__title">{title}</h3>
        <div className="todo-item__wrapper__text todo-item__wrapper__text--smaller">
          {author}
        </div>
        <div className="todo-item__wrapper__text todo-item__wrapper__text--smaller">
          {formatDate(createdAt)}
        </div>
        <p className="todo-item__wrapper__text">{note}</p>
      </div>
      <div className="todo-item__actions">
        <button
          className="todo-item__actions__button 
        todo-item__actions__icon"
          onClick={() => handleRemoveClick()}
        >
          <BinIcon isError={isRemoveError} />
        </button>
        {isRemoveError && (
          <div className="todo-item__actions__error-message">
            nie udało się usunąć
          </div>
        )}

        {isDone && (
          <>
            <div
              className="todo-item__actions__icon 
            todo-item__actions__icon--check-mark"
            >
              &#10003;
            </div>
            <div>{formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}

/**
 * utworzenie buttona
 * wybór elementu do usunięcia
 * request do API
 * sprawdzenie czy API wykonało usunięcie todosa
 * zaktualizowanie listy todosów po usunięciu
 */
