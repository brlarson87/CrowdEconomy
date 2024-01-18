import { createSlice } from '@reduxjs/toolkit'

import { Prizes } from '../DUMMY_DATA';

const initialState = {
    prizes: Prizes,
  }

export const prizesSlice = createSlice({
    name: 'prizes',
    initialState,
    reducers: {
      addOne: (state) => {
         let entered = state.prizes[0].enteredTickets;
         state.prizes[0].enteredTickets = entered + 1;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addOne } = prizesSlice.actions
  
  export default prizesSlice.reducer