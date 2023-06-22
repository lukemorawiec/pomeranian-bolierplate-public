import React, { useState } from 'react';
import './style.css';

export function Forms() {
  const [type, setType] = useState('');
  const [name, setName] = useState('');

  const [environment, setEnvironment] = useState(false);
  const [github, setGithub] = useState(false);

  const [payment, setPayment] = useState('blik');

  const sendFormData = (e) => {
    e.preventDefault();
    console.log(type);
    console.log(name);
    console.log(environment);
    console.log(github);
    console.log(payment);
  };

  return (
    <form className="forms" onSubmit={sendFormData}>
      <div className="form-section">
        <div className="form-section-title">ZAMÓWIENIE PRODUKTU</div>
        <div className="form-section-input-wrapper">
          <div className="form-section-input-label">Wybierz produkt</div>
          <select
            name="select-course"
            onChange={(event) => setType(event.target.value)}
            value={type}
          >
            <option value="-">Wybierz kurs</option>
            <option value="frontend">Kurs frontendowy</option>
            <option value="backend">Kurs beckendowy</option>
            <option value="tester">Kurs dla testerów</option>
          </select>
        </div>
        <div className="form-section-input-wrapper">
          <div className="form-section-input-label">
            Wybierz formę płatności
          </div>
          <div>
            <input
              type="radio"
              id="radio_blik"
              name="cos"
              checked={payment === 'blik'}
              value="blik"
              onChange={(e) => setPayment(e.target.value)}
            />
            <label htmlFor="radio_blik">Blik</label>
          </div>
          <div>
            <input
              type="radio"
              id="radio_paypal"
              name="cos"
              checked={payment === 'paypal'}
              value="paypal"
              onChange={(e) => setPayment(e.target.value)}
            />
            <label htmlFor="radio_paypal">Paypal</label>
          </div>
          <div>
            <input
              type="radio"
              id="radio_transfer"
              name="cos"
              checked={payment === 'transfer'}
              value="transfer"
              onChange={(e) => setPayment(e.target.value)}
            />
            <label htmlFor="radio_transfer">Przelew bankowy</label>
          </div>
        </div>
        <div className="form-section-input-wrapper">
          <div className="form-section-input-label">
            Opcje dodatkowe do zamówienia
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox_environment"
              checked={environment}
              onChange={() => setEnvironment(!environment)}
            />
            <label htmlFor="checkbox_environment">Ustawienie środowiska</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkbox_github"
              checked={github}
              onChange={() => setGithub(!github)}
            />
            <label htmlFor="checkbox_github">Intro do GitHub</label>
          </div>
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
            className="form-section-input"
            placeholder="Wpisz swoje imię i nazwisko"
          />
        </div>
      </div>
      <div className="form-section-title">DANE DO REALIZACJI ZAMÓWIENIA</div>
      <div className="submit-wrapper">
        <button type="submit">Składam zamówienie</button>
      </div>
    </form>
  );
}
