import './ToDoStatus.css';

export const ToDoStatus = ({ isDone, isDoneDate }) => {
  return (
    <div className="todo-status">
      <div>
        <div className={isDone ? 'checked-icon' : 'unchecked-icon'}>
          &#10004;
        </div>
        <div>{isDoneDate}</div>
      </div>
    </div>
  );
};
