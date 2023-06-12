
const redux = require('redux')


const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE'


//Action : 
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

const initialState = {
    numOfCakes: 10,
}

//Reducer : (prevState , action) => newAtate

const reducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state, 
            numOfCakes: state.numOfCakes - 1
        };
        default: return state;
    }
};

const store = createStore(reducer)
console.log("Initial State " , store.getState())
const unSubscribe = store.subscribe(() => console.log("Updated State " , store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unSubscribe()


