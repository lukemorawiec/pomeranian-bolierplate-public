import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { TodoItem } from './TodoItem/TodoItem';

export const BASE_API_URL = 'http://localhost:3333/api';

export function TodoList2() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState([]);

  const handleFetchTodoData = async () => {
    const timeOutDuration = 5000; //5sec czekania na odpoiedź serwera

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo`);
      const timeOutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response Timeout')),
          timeOutDuration
        );
      });

      const response = await Promise.race([fetchDataPromise, timeOutPromise]);

      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }
      setError('');
      setTodoList(response.data);
    } catch (error) {
      setError('Wystpił błąd podczas komunikacji z serwerem ' + error?.message);
    }
  };

  useEffect(() => {
    handleFetchTodoData();
  }, []);

  return (
    <div className="todo-container">
      <h2 className="todo-container__title">Todo List 2</h2>

      {error && <p>{error}</p>}

      <div className="todo-container__list">
        {todoList.length > 0 &&
          todoList.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                handleFetchTodoData={handleFetchTodoData}
              />
            );
          })}
      </div>
    </div>
  );
}
