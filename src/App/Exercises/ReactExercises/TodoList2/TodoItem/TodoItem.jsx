import { formatDate } from '../../../../../helpers/formatDate';
import { BinIcon } from '../../../../Images/Icons/BinIcon/BinIcon';
import './TodoItem.css';

export function TodoItem({ todo }) {
  const { title, author, createdAt, isDone, doneDate, note } = todo;

  const itemClasses = `todo-item ${isDone ? 'todo-item--darker' : ''}`;

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
        >
          <BinIcon isError={true} />
        </button>

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
