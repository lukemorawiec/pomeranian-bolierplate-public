import { useState } from 'react';
import { FieldSection } from './FieldSection/FieldSection';
import './Form2.css';
import { MainSection } from './MainSection/MainSection';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { Checkboxes } from './Checkboxes/Checkboxes';

const productOptions = [
  { value: 'frontend', label: 'kurs front-end' },
  { value: 'backend', label: 'kurs backend-end' },
  { value: 'devops', label: 'kurs devops' },
];

const paymentTypeOptions = [
  { value: 'blik', label: 'Blik' },
  { value: 'paypal', label: 'PayPal' },
  { value: 'transfer', label: 'przelew tradycyjny' },
];

const additionalOptionList = [
  { value: 'github', label: 'Intro do GitHub' },
  { value: 'environment', label: 'Ustawienia środowiska' },
  { value: 'extraDocuments', label: 'Materiały dodatkowe' },
];

export function Form2() {
  const [formData, setFormData] = useState({
    product: 'devops',
    paymentType: 'paypal',
    additionalOptions: {
      github: true,
      environment: false,
      extraDocuments: true,
    },
    consents: false,
  });

  console.log('formData: ', formData);

  function updateAdditionalOptions(optionName, newValue) {
    setFormData({
      ...formData,
      additionalOptions: {
        ...formData.additionalOptions,
        [optionName]: newValue,
      },
    });
  }

  function updateFormData(onChangeEvent) {
    setFormData({
      ...formData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('product:', event.target.product.value);
        console.log('paymentType:', event.target.product.value);
        console.log('additionalOption:', event.target.additionalOption.checked);
      }}
    >
      <MainSection title="ZAMÓWIENIE PRODUKTU">
        <FieldSection title="Wybierz produkt*">
          <select
            name="product"
            value={formData.product}
            onChange={(event) => {
              updateFormData(event);
            }}
          >
            {productOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FieldSection>
        <FieldSection title="Wybierz formę płatności*">
          <RadioButtons
            name="paymentType"
            options={paymentTypeOptions}
            value={formData.paymentType}
            onChange={updateFormData}
          />
        </FieldSection>
        <FieldSection title="Opcje dodatkowe do zamówienia">
          <label htmlFor="checkbox-github">
            <input type="checkbox" id="checkbox-github" name="github" /> Intro
            do GitHub
          </label>

          <Checkboxes
            list={additionalOptionList.map((item) => {
              return {
                ...item,
                isChecked: formData.additionalOptions[item.value],
              };
            })}
            onChange={updateAdditionalOptions}
          />
        </FieldSection>
      </MainSection>

      <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
        <div>test</div>
      </MainSection>
      <button type="submit">WYŚLIJ</button>
    </form>
  );
}
