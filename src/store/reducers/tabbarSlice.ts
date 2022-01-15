import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tabNumber: 1
}

export const TabbarSlice = createSlice({
    name: 'tabbar',
    initialState,
    reducers: {
        changeTab: (state, action) => {
            state.tabNumber = action.payload
        }
    }
})

export const { changeTab } = TabbarSlice.actions;

export default TabbarSlice.reducer; 
