import { configureStore } from '@reduxjs/toolkit';
import {myValueSlice} from './myValue/slice'
import {myItemsSlice} from './item/slice'
import { userSlice } from './userSlice';



export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: myItemsSlice.reducer,
    user: userSlice.reducer,
  },
});
