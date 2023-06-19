import { requestHandler } from '../requestHandler';
import './TodoItem.css';

const parseDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toDateString();
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
    setError,
  } = props;

  const deleteTodo = async (selectedId) => {
    requestHandler('DELETE', selectedId)
      .then(() => {
        getTodoList();
      })
      .catch((errorMessage) => {
        setError(errorMessage);
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
        {isDone && (
          <div>
            <div className="checked-icon">&#10004;</div>
            <div>{parseDate(doneDate)}</div>
          </div>
        )}
      </div>
    </div>
  );
};
