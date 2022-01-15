import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

interface UsersState {
    users: IUser[];
    isLoading: boolean;
    error: null | string;
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer;
