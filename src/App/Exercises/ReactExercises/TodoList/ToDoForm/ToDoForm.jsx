import { requestHandler } from '../requestHandler';
import './ToDoForm.css';

export const ToDoForm = ({ hide }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    requestHandler('POST', undefined, {
      title: e.target.title.value,
      note: e.target.author.value,
      author: e.target.note.value,
    })
      .then((jsonResponse) => {
        console.log(jsonResponse);
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  };

  return (
    <div className="todo-form">
      <div className="todo-form-back" onClick={() => hide(false)}>
        Wstecz
      </div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Kupic parasol..." name="title" type="text" />
        <br />
        <input placeholder="Autor" name="author" type="text" />
        <br />
        <textarea placeholder="Tresc" name="note" type="text" />
        <br />
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};
