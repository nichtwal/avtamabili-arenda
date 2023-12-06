import {configureStore} from '@reduxjs/toolkit'
import car from './slices/carSlice'
export const store = configureStore({
    reducer: {
car,
    }
})