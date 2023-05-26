import './Button.css';

export const Button = ({ children, isActive, onClick }) => {
  const highlightClass = 'button-active';

  const buttonClasses = 'button ' + highlightClass;
  return (
    <button
      className={`button ${isActive ? 'button-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
