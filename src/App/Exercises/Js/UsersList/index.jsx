import React from 'react';
import './styles.css';

export function UsersList() {
  const [inputValue, setInputValue] = React.useState('');

  const [users, setUsers] = React.useState(
    JSON.parse(window.localStorage.getItem('users')) || []
  );

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const sendFormValue = () => {
    setUsers((prevState) => [
      ...prevState,
      { id: users.length + 1, name: inputValue },
    ]);
    setInputValue('');
  };

  const removeValue = (id) => {
    setUsers((currentState) => currentState.filter((item) => item.id !== id));
  };

  const sendValuesToStorge = () => {
    window.localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <div className="users-list">
      <div className="users-list-input-wrapper">
        <div className="users-list-input">
          <div>NICK</div>
          <input
            type="text"
            placeholder="Jaras_2000"
            onChange={changeInputValue}
            value={inputValue}
            name="Nick input"
          />
        </div>
        <button
          onClick={sendFormValue}
          // disabled={inputValue.length === 0 ? true : false}
          // disabled={inputValue.length === 0 || false}
          disabled={!inputValue.length}
        >
          Dodaj
        </button>
      </div>
      <div className="users-list-list-wrapper">
        {users.map(({ id, name }) => (
          <div key={id}>
            <h3>{name}</h3>
            <span onClick={() => removeValue(id)}>Usun</span>
          </div>
        ))}
        <button onClick={sendValuesToStorge}>Wyslij do storage</button>
      </div>
    </div>
  );
}
