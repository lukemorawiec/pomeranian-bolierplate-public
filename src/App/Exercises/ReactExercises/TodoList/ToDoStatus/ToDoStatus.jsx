import './ToDoStatus.css';

export const ToDoStatus = ({
  isDone,
  isDoneDate,
  markAsDone,
  markAsDoneError,
}) => {
  const checkStatus = () => {
    switch (isDone) {
      case true:
        return 'checked-icon';
      case false:
        return 'unchecked-icon';
      default:
        return '-';
    }
  };

  return (
    <div className="todo-status">
      <div>
        <div
          onClick={isDone ? null : markAsDone}
          className={markAsDoneError ? 'mark-error' : checkStatus()}
        >
          &#10004;
        </div>
        <div>{isDoneDate || markAsDoneError}</div>
      </div>
    </div>
  );
};
