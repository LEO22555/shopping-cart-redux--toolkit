import { createSlice } from "@reduxjs/toolkit";

//Estado inicial
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
}

//Creacion del slice
const cartSlice = createSlice({
    name: "cart",
    initialState,
});