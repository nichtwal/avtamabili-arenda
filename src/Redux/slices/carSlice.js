import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    car: {},
    options: [],
    totalPrice: 0,
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        addCar(state, action) {
            state.car = action.payload
            state.totalPrice = action.payload.price
        },
        addOption(state, action) {
            const { id, price } = action.payload;
            const existingOptionIndex = state.options.findIndex((option) => option.id === id);
          
            if (existingOptionIndex !== -1) {
              state.options.splice(existingOptionIndex, 1);
              state.totalPrice -= price;

            } else {
              state.options.push(action.payload);
              state.totalPrice += price;
            }
          },
        changePrice(state, action) {
            state.totalPrice += action.payload
        },
        toggleSelected(state, action) {
            const { id, selected } = action.payload;
            const option = state.car.checkboxes.find((opt) => opt.id === id);
            if (option) {
                option.selected = selected;
            }
        },
        removeOption(state, action) {
            const { id, price } = action.payload
            state.options = state.options.filter(el => (el.id !== id))
            state.totalPrice -= price
            const option = state.car.checkboxes.find((opt) => opt.id === id);
            if (option) {
                option.selected = false;
            }
        },
        defaultState(state) {
            state.car = {}
            state.options = []
            state.totalPrice = 0
        }
    }
})

export const selectedCar = (state) => state.car

export const { addCar, addOption, changePrice, toggleSelected, removeOption, defaultState } = carSlice.actions

export default carSlice.reducer