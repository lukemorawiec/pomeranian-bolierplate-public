import { useState } from 'react';
import './TodoForm.css';

export function TodoForm({ setAddingMode }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');

  function handleCreateTodo() {
    console.log('title', title);
    console.log('author', author);
    console.log('note', note);
  }

  return (
    <div className="todo-form">
      <div className="todo-form__field">
        <label className="todo-form__field__label">Tytuł</label>
        <input
          type="text"
          placeholder="Kup ser"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>

      <div className="todo-form__field">
        <label className="todo-form__field__label">Autor</label>
        <input
          type="text"
          placeholder="Jan Kowalski"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
      </div>

      <div className="todo-form__field">
        <label className="todo-form__field__label">Treść</label>
        <textarea
          placeholder="Kup ser w biedronce"
          rows={5}
          cols={25}
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
          }}
        />
      </div>

      <div className="todo-form__buttons">
        <button
          className="big-button"
          onClick={() => {
            setAddingMode(false);
          }}
        >
          COFNIJ
        </button>
        <button
          className="big-button"
          onClick={() => {
            handleCreateTodo();
          }}
        >
          DODAJ
        </button>
      </div>
    </div>
  );
}
