import React, { useState } from 'react';
import { ArrowIcon } from '../Icons/ArrowIcon';
import './styles.css';

const test = ['jeden', 'dwa', 'trzy'];

const [valueOne, valueTwo, valueThree] = test;

console.log(valueOne);
console.log(valueTwo);
console.log(valueThree);

export const FaqSection = (props) => {
  const { question, answer } = props;
  const [answerVisibility, setAnswerVisibility] = useState(false);

  const toggleVisibility = () => {
    setAnswerVisibility(!answerVisibility);
  };

  const isArrowIconRotated = !answerVisibility;

  return (
    <div className="faq-section">
      <div className="question" onClick={toggleVisibility}>
        <ArrowIcon
          className={`arrow-icon ${
            isArrowIconRotated ? 'arrow-icon-rotated' : ''
          }`}
        />
        {question}
      </div>
      {answerVisibility && <div className="answer">{answer}</div>}
    </div>
  );
};
