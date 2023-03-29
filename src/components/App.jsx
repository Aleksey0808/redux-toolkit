import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, add, remove } from '../redux/store';

export const App = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  const item = useSelector(state => state.items);

  return (
    <div>
      {value}
      <button onClick={() => dispatch(decrement(10))}>decrement</button>

      <button onClick={() => dispatch(increment(10))}>increment</button>
      <button onClick={() => dispatch(add('hello world'))}>add</button>
      <button onClick={() => dispatch(remove())}>remove</button>
      {item}
    </div>
  );
};
