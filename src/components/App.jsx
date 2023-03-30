import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../redux/myValue/slice';
// import { add, remove } from '../redux/item/slice';

const Login = lazy(() => import('../pages/loginPage'));
const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  // const dispatch = useDispatch();
  // const value = useSelector(state => state.myValue);
  // const item = useSelector(state => state.items);

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}> 
    <Route path="login" element={<Login />} />
    </Route>
    
   
    </Routes>
    </>
  );
};
