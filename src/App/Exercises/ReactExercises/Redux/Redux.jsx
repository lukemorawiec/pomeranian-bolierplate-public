import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../../../store/features/counterSlice';

export function Redux() {
  const count = useSelector((state) => {
    return !isNaN(state.counter.value)
      ? state.counter.value
      : '(incorrect value)';
  });

  const extras = useSelector((state) => {
    return state.counter.extras;
  });

  const dispatch = useDispatch();

  console.log('count', count);
  console.log('extras: ', extras);

  return (
    <div className="redux">
      <h1>Counter (Redux)</h1>

      <div>
        count: <b>{count}</b>
      </div>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          dispatch(
            incrementByAmount({
              passedValue: 10,
              extraButtonClicked: false,
            })
          );
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          dispatch(
            incrementByAmount({ passedValue: 10, extraButtonClicked: true })
          );
        }}
      >
        +10 (extra button)
      </button>

      {extras.overFive}
    </div>
  );
}
