import { useState } from 'react';
import { requestHandler } from '../requestHandler';
import './ToDoForm.css';

export const ToDoForm = ({ hide, getTodoList, editObject, setEditObject }) => {
  const isEditMode = Boolean(editObject);

  const [message, setMessage] = useState();
  const [isPopupShown, setPopupVisibility] = useState(false);

  const [title, setTitle] = useState(isEditMode ? editObject.title : '');
  const [note, setNote] = useState(isEditMode ? editObject.note : '');
  const [author, setAuthor] = useState(isEditMode ? editObject.author : '');

  const createNewTodo = async () => {
    requestHandler('POST', undefined, {
      title: title,
      note: note,
      author: author,
    })
      .then((response) => {
        setMessage(`Dodałeś zadanie o tytule: ${response.title}`);
      })
      .catch((errorMessage) => {
        setMessage('Nie udało się dodać zadania z powodu: ' + errorMessage);
      });
  };

  const editTodo = async () => {
    requestHandler('PUT', editObject.id, {
      title: title,
      note: note,
      author: author,
    })
      .then((response) => {
        setMessage(`Edytowałeś zadanie o tytule: ${response.title}`);
      })
      .catch((errorMessage) => {
        setMessage('Nie udało się edytować zadania z powodu: ' + errorMessage);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title !== '' && author.length > 0 && note === '') {
      setPopupVisibility(true);
    }

    if (title !== '' && author !== '' && note !== '') {
      if (isEditMode) {
        editTodo();
      } else {
        createNewTodo();
      }
    }
  };

  function backToTheList() {
    hide(false);
    getTodoList();
    setEditObject();
  }

  return (
    <div className="todo-form">
      <button
        className="todo-button"
        onClick={() => {
          backToTheList();
        }}
      >
        Wróć to listy Todo
      </button>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <div className="form-label">Tytuł: </div>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            className="form-input"
            size={30}
          />
        </div>
        <div className="form-item">
          <div className="form-label">Autor: </div>
          <input
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            type="text"
            className="form-input"
            size={30}
          />
        </div>
        <div className="form-item">
          <div className="form-label">Treść: </div>
          <textarea
            name="note"
            className="form-input"
            cols={30}
            rows={10}
            onChange={(event) => setNote(event.target.value)}
            value={note}
          />
        </div>

        <button className="todo-button" type="submit">
          {isEditMode ? 'Zapisz' : 'Dodaj'}
        </button>

        <br />
        <br />
        <br />

        {message && <span className="form-message-box">{message}</span>}
      </form>

      {isPopupShown && (
        <div className="popup">
          <div className="popup-content">
            <div>Czy chcesz dodać zadanie bez treści? </div>

            <button
              className="todo-button"
              onClick={() => {
                createNewTodo();
                setPopupVisibility(false);
              }}
            >
              Tak
            </button>
            <button
              className="todo-button"
              onClick={() => setPopupVisibility(false)}
            >
              Nie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
