
const redux = require('redux')
const reduxLogger = require('redux-logger')
const reduxLogger = require('@reduxjs/toolkit')


const createStore = redux.configureStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICECREAM'


//Action : 
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}
function buyIceCream(){
    return {
        type: BUY_ICE_CREAM,
    }
}

const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numOfIcecream: 20,
}

//Reducer : (prevState , action) => newAtate
const cakeReducer = (state = initialCakeState , action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state, 
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
};
const iceCreamReducer = (state = initialIceCreamState , action) => {
    switch(action.type){
        case BUY_ICE_CREAM: return{
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }
        default: return state;
    }
};
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer , applyMiddleware(logger))
console.log("Initial State " , store.getState())
const unSubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unSubscribe()




