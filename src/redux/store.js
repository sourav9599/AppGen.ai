import { configureStore } from '@reduxjs/toolkit'
import featureReducer from './features/featureSlice'

export const store = configureStore({
  reducer: {
    feature: featureReducer,
  },
})
