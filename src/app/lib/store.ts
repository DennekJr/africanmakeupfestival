import { configureStore } from '@reduxjs/toolkit'
import checkoutReducer from './features/checkout/checkoutSlice'
import exhibitionReducer from './features/exhibition/exhibitionSlice'
import registerReducer from './features/register/registerSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      checkout: checkoutReducer,
      exhibition: exhibitionReducer,
      register: registerReducer,
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']