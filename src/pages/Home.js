import React from 'react';
import { Outlet } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/myValue/slice';
import { add, remove } from '../redux/item/slice';
import { AppBar } from 'components/AppBar';


 const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  const item = useSelector(state => state.items);

  return (
    <>
    <AppBar />
   
    <Outlet/>
    <br />
    <div>
      {value}
      <button onClick={() => dispatch(decrement(10))}>decrement</button>

      <button onClick={() => dispatch(increment(10))}>increment</button>
      <button onClick={() => dispatch(add('hello world'))}>add</button>
      <button onClick={() => dispatch(remove())}>remove</button>
      {item}
    </div>
    </>
  );
};

export default Home
