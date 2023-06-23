export default function Checkbox({ name, isChecked, setter, label }) {
  return (
    <div>
      <input
        type="checkbox"
        id={name}
        checked={isChecked}
        onChange={() => setter(!isChecked)}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
