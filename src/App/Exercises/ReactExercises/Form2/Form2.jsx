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
  { fieldName: 'github', label: 'Intro do GitHub' },
  { fieldName: 'environment', label: 'Ustawienia środowiska' },
  { fieldName: 'extraDocuments', label: 'Materiały dodatkowe' },
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
    nameAndSurname: '',
    email: '',
    details: '',
    consents: false,
  });

  console.log('formData: ', formData);

  function updateAdditionalOptions(fieldName, newValue) {
    setFormData({
      ...formData,
      additionalOptions: {
        ...formData.additionalOptions,
        [fieldName]: newValue,
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
          <Checkboxes
            list={additionalOptionList.map((item) => {
              return {
                ...item,
                isChecked: formData.additionalOptions[item.fieldName],
              };
            })}
            onChange={updateAdditionalOptions}
          />
        </FieldSection>
      </MainSection>

      <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
        <FieldSection title="Imię i nazwisko">
          <input type="text" name="nameAndSurname" />
        </FieldSection>
        <FieldSection title="Email">
          <input type="text" name="email" />
        </FieldSection>

        <FieldSection title="Uwagi dodatkowe">
          <textarea
            name="details"
            cols="40"
            rows="10"
            style={{ resize: 'none' }}
          />
        </FieldSection>
      </MainSection>

      <MainSection title="ZGODY">
        <FieldSection title="Regulamin">
          <Checkboxes
            list={[
              {
                fieldName: 'consents',
                label: 'apceptuję regulamin*',
                isChecked: formData.consents,
              },
            ]}
            onChange={(_, newValue) => {
              setFormData({
                ...formData,
                consents: newValue,
              });
            }}
          />
        </FieldSection>
      </MainSection>
      <button type="submit">WYŚLIJ</button>
    </form>
  );
}
