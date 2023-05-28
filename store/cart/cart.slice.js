import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      const isExists = state.some(product => product.id === action.payload.id)

      if (isExists) {
        const index = state.findIndex(product => product.id === action.payload.id)

        if (index !== -1) {
          state.splice(index, 1)
        }
      } else {
        state.push(action.payload)
      }
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { actions, reducer } = cartSlice
