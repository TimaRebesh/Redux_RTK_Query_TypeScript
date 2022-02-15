import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentsApi from "../services/commentsApi";
import usersApi from "../services/usersApi";
import tabbarReducer from './reducers/tabbarSlice';

export const rootReducer = combineReducers({
    tabbar: tabbarReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(usersApi.middleware, commentsApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
