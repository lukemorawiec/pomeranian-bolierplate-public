import React, { useEffect, useState } from 'react';
import './style.css';
import { TodoItem } from './TodoItem/TodoItem';
import { requestHandler } from './requestHandler';
import { ToDoForm } from './ToDoForm/ToDoForm';

export function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [showCreateForm, setShowCreateForm] = useState(false);

  const getTodoList = async () => {
    setIsLoading(true);

    requestHandler('GET')
      .then((jsonResponse) => {
        setTodoList(jsonResponse);
      })
      .catch((errorMessage) => {
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getTodoList();
  }, []);

  if (isLoading) {
    return <p>Ładowanie...</p>;
  }

  if (showCreateForm) {
    return (
      <div className="api-requests">
        <ToDoForm hide={setShowCreateForm} />
      </div>
    );
  }

  return (
    <div className="api-requests">
      <h2>Todo list:</h2>

      {error && (
        <h3>
          Oops! Something went wrong!
          <br />
          {error}
          <br />
          <button
            onClick={() => {
              setError();
              getTodoList();
            }}
          >
            Retry
          </button>
        </h3>
      )}

      {!error &&
        todoList.map((item) => {
          const { id, title, createdAt } = item;

          return (
            <TodoItem
              key={id}
              id={id}
              title={title}
              createdAt={createdAt}
              author={item.author}
              isDone={item.isDone}
              note={item.note}
              doneDate={item.doneDate}
              getTodoList={getTodoList}
            />
          );
        })}

      <button onClick={() => setShowCreateForm(true)}>Dodaj</button>
    </div>
  );
}
