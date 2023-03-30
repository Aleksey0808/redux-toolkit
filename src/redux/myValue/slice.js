import { createSlice } from '@reduxjs/toolkit';

export const myValueSlice = createSlice({
    name: 'myValue',
    initialState: 10,
    reducers: {
      increment(state, action) {
        return state + action.payload;
      },
      decrement(state, action) {
        return state - action.payload;
      },
    },
  });
  
  export const { decrement, increment } = myValueSlice.actions;

  // export const increment = createAction(' myValue/increment ');
// export const decrement = createAction(' myValue/decrement ');

// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

//inner

