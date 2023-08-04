import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoForm } from './TodoForm/TodoForm';

export const BASE_API_URL = 'http://localhost:3333/api';
const TIMEOUT_DURATION = 5000; //5sec czekania na odpoiedź serwera

export function TodoList2() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState([]);
  const [isFormVisible, setFormVisibility] = useState(false);

  const [idForEdit, setIdForEdit] = useState(null);
  console.log('idForEdit:', idForEdit);

  const handleFetchTodoData = async (givenId) => {
    // jezeli nie podamy w wywołaniu funkcji parametru `givenId`, to ta wartość będzie `undefined`

    const isGetSpecificTodoMode = Boolean(givenId);

    const urlSuffix = isGetSpecificTodoMode ? `/${givenId}` : '';

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo${urlSuffix}`);
      const timeOutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response Timeout')),
          TIMEOUT_DURATION
        );
      });

      const response = await Promise.race([fetchDataPromise, timeOutPromise]);

      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }
      setError('');

      if (isGetSpecificTodoMode) {
        const updatedTodo = response.data;

        setTodoList(
          todoList.map((todo) => {
            if (todo.id === updatedTodo.id) {
              return updatedTodo;
            }
            return todo;
          })
        );
      } else {
        setTodoList(response.data);
      }
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

      {isFormVisible && (
        <TodoForm
          setFormVisibility={setFormVisibility}
          handleFetchTodoData={handleFetchTodoData}
          data={todoList.find((todo) => todo.id === idForEdit)}
          setIdForEdit={setIdForEdit}
        />
      )}

      {!isFormVisible && (
        <>
          <div className="todo-container__list">
            {todoList.length > 0 &&
              todoList.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.id}
                    handleFetchTodoData={handleFetchTodoData}
                    setIdForEdit={setIdForEdit}
                    setFormVisibility={setFormVisibility}
                  />
                );
              })}
          </div>

          <button
            className="big-button"
            onClick={() => {
              setFormVisibility(true);
            }}
          >
            DODAJ
          </button>
        </>
      )}
    </div>
  );
}

/**
 * DODAWANIE TODOSA:
 * button "DODAJ"
 * widok formularza dodawania z dwoma inputami i przyciskiem "ZAPISZ" i "COFNIJ"
 * obsługa widoku (przełączanie widoku)
 * request do API dodający nowe todo
 * jezeli request się powiedzie to:
 *    informujemy o powodzeniu,
 *    czyscimy formularz
 * po kliku "COFNIJ" odswiezamy listę
 */

/**
 * EDYCJA TODOSA:
 * button "Edytuj"
 * włączenie formularza z danymi i w trybie edycji (brak autora i labelka przycisku zmienia się na ZAPISZ)
 * wysłanie odpowiedniego requestu (PUT i z identyfikatorem)
 * po kliku ZAPISZ wracamy do listy i odświezamy

 */
