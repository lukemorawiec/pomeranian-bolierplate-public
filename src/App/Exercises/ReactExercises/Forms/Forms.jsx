import React, { useState } from 'react';
import Select from 'react-select';
import './style.css';
import RadioButtons from './RadioButtons/RadioButtons';
import Checkbox from './Checkbox/Checkbox';

export function Forms() {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [environment, setEnvironment] = useState(false);
  const [github, setGithub] = useState(false);

  const [payment, setPayment] = useState('blik');

  const [rules, setRules] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const sendFormData = (e) => {
    e.preventDefault();
  };

  const typeOptions = [
    { value: 'frontend', label: 'Kurs frontendowy' },
    { value: 'backend', label: 'Kurs beckendowy' },
    { value: 'tester', label: 'Kurs dla testerów' },
  ];

  const paymentOptions = [
    { value: 'blik', label: 'Blik' },
    { value: 'paypal', label: 'Paypal' },
    { value: 'transfer', label: 'Przelew bankowy' },
  ];

  const nameIsEmpty = name === '';
  const typeIsEmpty = type === '';
  const rulesIsNotChecked = !rules;

  const submitDisabled = nameIsEmpty || typeIsEmpty || rulesIsNotChecked;

  const isNameTyped = name !== '';
  const isProperNameAndSurname = name.trim().includes(' ');

  const isEmailTyped = email !== '';
  const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
  const isEmailProper = regex.test(email);

  return (
    <form className="forms" onSubmit={sendFormData}>
      <div className="form-section">
        <div className="form-section-title">ZAMÓWIENIE PRODUKTU</div>
        <div className="form-section-input-wrapper">
          <div className="form-section-input-label">Wybierz produkt</div>

          <Select
            options={typeOptions}
            value={typeOptions.find((option) => option.value === type)}
            onChange={(optionObj) => {
              setType(optionObj.value);
            }}
          />
        </div>
        <div className="form-section-input-wrapper">
          <div className="form-section-input-label">
            Wybierz formę płatności
          </div>

          <RadioButtons
            contextName="payments"
            options={paymentOptions}
            selectedOption={payment}
            onSelect={setPayment}
          />
        </div>
        <div className="form-section-input-wrapper">
          <div className="form-section-input-label">
            Opcje dodatkowe do zamówienia
          </div>

          <Checkbox
            name="environment"
            isChecked={environment}
            setter={setEnvironment}
            label="Ustawienie środowiska"
          />

          <Checkbox
            name="github"
            isChecked={github}
            setter={setGithub}
            label="Intro do GitHub"
          />
        </div>
      </div>
      <div className="form-section">
        <div className="form-section-title">DANE DO REALIZACJI ZAMÓWIENIA</div>
        <div className="form-section-input-wrapper">
          <div className="form-section-input-label">Imię i nazwisko</div>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            className={`form-section-input ${
              isNameTyped && !isProperNameAndSurname ? 'input-error' : ''
            }`}
            placeholder="Wpisz swoje imię i nazwisko"
          />
          {isNameTyped && !isProperNameAndSurname && (
            <span className="text-red">Imię i nazwisko nie jest poprawne</span>
          )}
        </div>
        <div className="form-section-input-wrapper">
          <div className="form-section-input-label">Email</div>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            className={`form-section-input ${
              isEmailTyped && !isEmailProper ? 'input-error' : ''
            }`}
            placeholder="Wpisz email"
          />
          {isEmailTyped && !isEmailProper && (
            <span className="text-red">Email jest niepoprawny</span>
          )}
        </div>
      </div>
      <br />
      <br />
      <div className="form-section-input-wrapper">
        <div className="form-section-title">Zgody</div>

        <Checkbox
          name="rules"
          isChecked={rules}
          setter={setRules}
          label="Akceptuję regulamin*"
        />

        <Checkbox
          name="marketing"
          isChecked={marketing}
          setter={setMarketing}
          label="Zgody marketingowe"
        />
      </div>
      <div className="submit-wrapper">
        <button type="submit" disabled={submitDisabled}>
          Składam zamówienie
        </button>
      </div>
    </form>
  );
}
