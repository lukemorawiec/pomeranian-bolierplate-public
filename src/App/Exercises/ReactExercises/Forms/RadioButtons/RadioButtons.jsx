export default function RadioButtons({
  options,
  selectedOption,
  onSelect,
  contextName,
}) {
  return (
    <div>
      {options.map(({ value, label }) => {
        return (
          <div key={value}>
            <input
              type="radio"
              id={`radio-${value}`}
              name={contextName}
              checked={selectedOption === value}
              value={value}
              onChange={(event) => onSelect(event.target.value)}
            />
            <label htmlFor={`radio-${value}`}>{label}</label>
          </div>
        );
      })}
    </div>
  );
}
