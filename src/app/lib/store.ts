import { configureStore } from '@reduxjs/toolkit'
import checkoutReducer from './features/checkout/checkoutSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      checkout: checkoutReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']