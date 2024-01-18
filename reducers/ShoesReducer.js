import { createSlice } from '@reduxjs/toolkit'

import { Shoes } from '../DUMMY_DATA';

const initialState = {
    shoes: Shoes,
  }

export const shoesSlice = createSlice({
    name: 'shoes',
    initialState,
    reducers: {},
  })
  
  // Action creators are generated for each case reducer function
 
  
  export default shoesSlice.reducer