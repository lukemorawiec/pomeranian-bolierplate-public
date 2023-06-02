import './Button.css';

export const Button = ({ children, isActive, onClick, isDisabled }) => {
  const highlightClass = 'button-active';

  const buttonClasses = 'button ' + highlightClass;
  return (
    <button
      className={`button ${isActive ? 'button-active' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
