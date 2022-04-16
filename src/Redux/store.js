import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { citiesReducer } from "./city/city.reducer";
import { countriesReducer } from "./country/country.reducer";


const rootReducer = combineReducers({
    countries: countriesReducer,
    cities: citiesReducer
})

const loggerMiddleware = (store)=>(next)=>(action)=>{
    if(typeof action === "function"){
        return action(store.dispatch)
    }

    next(action);
}

export const store = createStore(rootReducer, compose(applyMiddleware(loggerMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))