import heroes from "../components/heroesList/heroesSlice"
import filters from "../components/heroesFilters/filtersSlice"
import {configureStore} from "@reduxjs/toolkit";



const stringMiddleWare = () => (next) => (action) => {
    if(typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {heroes,filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare),
    devTools: process.env.NODE_ENV !== 'production'
})




// const store = createStore(
//     combineReducers({heroes,filters}),
//     compose(applyMiddleware(ReduxThunk ,stringMiddleWare),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );

export default store;