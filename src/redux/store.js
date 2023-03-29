import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const myValueSlice = createSlice({
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

const myItemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = myItemsSlice.actions;

// export const add = createAction(' myValue/add ');
// export const remove = createAction(' myValue/remove ');

// const itemsReducer = createReducer([], {
//   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state, action) => state.filter(item => item.i !== action.payload),
// });

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: myItemsSlice.reducer,
  },
});
