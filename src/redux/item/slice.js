import { createSlice } from '@reduxjs/toolkit';

export const myItemsSlice = createSlice({
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
  
  // export const add = createAction(' items/add ');
  // export const remove = createAction(' items/remove ');
  
  // const itemsReducer = createReducer([], {
  //   [add]: (state, action) => state.push(action.payload),
  //   [remove]: (state, action) => state.filter(item => item.i !== action.payload),
  // });