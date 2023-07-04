import { useDispatch, useSelector } from 'react-redux';
import { setAdditionalStuffValue } from '../../../../../store/features/formSlice';

export default function Checkbox({ name, label }) {
  const additionalStuff = useSelector((state) => state.form.additionalStuff);
  const dispatch = useDispatch();

  const isChecked = additionalStuff[name];

  return (
    <div>
      <input
        type="checkbox"
        id={name}
        checked={isChecked}
        onChange={() => {
          dispatch(
            setAdditionalStuffValue({
              fieldName: name,
              fieldValue: !isChecked,
            })
          );
        }}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
