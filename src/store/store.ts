import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersApi from "../services/usersApi";
import tabbarReducer from './reducers/tabbarSlice';

export const rootReducer = combineReducers({
    tabbar: tabbarReducer,
    [usersApi.reducerPath]: usersApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(usersApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
