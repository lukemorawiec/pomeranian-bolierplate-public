import { useState } from 'react';
import { FieldSection } from './FieldSection/FieldSection';
import './Form2.css';
import { MainSection } from './MainSection/MainSection';
import { RadioButtons } from './RadioButtons/RadioButtons';

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

export function Form2() {
  const [formData, setFormData] = useState({
    product: 'devops',
    paymentType: 'paypal',
  });

  console.log('formData: ', formData);

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
        console.log('select:', event.target.product.value);
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
      </MainSection>

      <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA">
        <div>test</div>
      </MainSection>
      <button type="submit">WYŚLIJ</button>
    </form>
  );
}
