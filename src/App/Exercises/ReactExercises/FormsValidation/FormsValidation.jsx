import React, { useState } from 'react';
import './style.css';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../../../../firebase';

const containsUppercase = (str) => {
  return /[A-Z]/.test(str);
};

const containsEmail = (str) => {
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  return regexExp.test(str);
};

export function FormsValidation() {
  const [error, setError] = useState('');
  const [isAuthorized, setAuthorized] = useState('');

  const isPasswordValid = (pass, repeat) => {
    if (pass !== repeat) {
      setError('Hasła nieprawidłowe');
      return false;
    }
    if (!containsUppercase(pass)) {
      setError('Brak wielkiej litery');
      return false;
    }
    if (pass.length < 10) {
      setError('Haslo za krotkie');
      return false;
    }
    setError('');
    return true;
  };

  const isEmailValid = (mail) => {
    if (!mail) {
      setError('Brak maila');
      return false;
    }
    if (!containsEmail(mail)) {
      setError('Mail bledny');
      return false;
    }
    setError('');
    return true;
  };

  const sendFormData = (data) => {
    data.preventDefault();

    const password = data.target.password.value;
    const passwordRepeat = data.target.passwordRepeat.value;
    const email = data.target.email.value;

    if (isPasswordValid(password, passwordRepeat) && isEmailValid(email)) {
      signInWithEmailAndPassword(getAuth(firebaseApp), email, password)
        .then((userCredential) => {
          // User signed in successfully
          const user = userCredential.user;
          setAuthorized(`Zalogowano jako: ${user.email}`);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Sign-in error:', error);
        });
    }
  };

  return (
    <div className="forms-validation">
      <form className="form" onSubmit={sendFormData}>
        <input type="email" placeholder="Wpisz email" name="email" required />
        <br /> <br />
        <input
          type="password"
          placeholder="Wpisz hasło"
          name="password"
          required
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Powtórz hasło"
          name="passwordRepeat"
          required
        />
        <br /> <br />
        {error || '---'}
        <br /> <br />
        <button type="submit">Zapisz</button>
        <br />
        {isAuthorized}
      </form>
    </div>
  );
}
