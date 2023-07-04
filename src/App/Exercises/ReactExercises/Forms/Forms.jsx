import React, { useState } from 'react';
import Select from 'react-select';
import './style.css';
import RadioButtons from './RadioButtons/RadioButtons';
import Checkbox from './Checkbox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../../../store/features/formSlice';

export function Forms() {
  const formFields = useSelector((state) => state.form);
  const dispatch = useDispatch();

  console.log('formFields', formFields);

  const { name, email, type } = formFields;

  const [environment, setEnvironment] = useState(false);

  const [payment, setPayment] = useState('blik');

  const [rules, setRules] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const sendFormData = (e) => {
    e.preventDefault();

    const result = formFields;

    console.log('result', result);
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
              dispatch(
                setValue({ fieldName: 'type', fieldValue: optionObj.value })
              );
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

          <Checkbox name="github" label="Intro do GitHub" />
        </div>
      </div>
      <div className="form-section">
        <div className="form-section-title">DANE DO REALIZACJI ZAMÓWIENIA</div>
        <div className="form-section-input-wrapper">
          <div className="form-section-input-label">Imię i nazwisko</div>
          <input
            value={name}
            onChange={(event) =>
              dispatch(
                setValue({ fieldName: 'name', fieldValue: event.target.value })
              )
            }
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
            onChange={(event) =>
              dispatch(
                setValue({ fieldName: 'email', fieldValue: event.target.value })
              )
            }
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
