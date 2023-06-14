import React, { useEffect, useState } from 'react';
import './style.css';

export function ApiRequests() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState();

  const getTodoListAsync = async () => {
    const response = await fetch('http://localhost:3333/api/todo');

    const jsonResponse = await response.json();

    console.log(response);

    if (response.status === 200) {
      setTodoList(jsonResponse);
    }

    if (response.status !== 200 && jsonResponse.message) {
      setError(jsonResponse.message);
    }
  };

  const getTodoList = () => {
    fetch('http://localhost:3333/api/todo')
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.message) {
          setError(jsonResponse.message);
        } else {
          setTodoList(jsonResponse);
        }
      });
  };

  useEffect(() => {
    getTodoListAsync();
    // getTodoList();
  }, []);

  return (
    <div className="api-requests">
      <h2>Todo list:</h2>
      {error && (
        <h3>
          Oops! Something went wrong!
          <br />
          {error}
        </h3>
      )}
      {!error &&
        todoList.map((item) => {
          return (
            <div className="todo-item" key={item.id}>
              <h3 className="todo-title">
                {item.title}{' '}
                {item.isDone ? (
                  <span className="checked-icon">&#10004;</span>
                ) : (
                  ''
                )}
              </h3>
              <div>
                created at: <b>{item.createdAt}</b>
              </div>

              <div>
                author: <b>{item.author}</b>
              </div>
            </div>
          );
        })}
    </div>
  );
}
