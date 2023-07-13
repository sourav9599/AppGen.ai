import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const featureSlice = createSlice({
  name: 'slice-name',
  initialState,
  reducers: {},
})

export const {} = featureSlice.actions
export default featureSlice.reducer
