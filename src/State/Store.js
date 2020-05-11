
   import deploymentReducer from "./Reducers/deploymentReducer";
      

   import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { watchAuth } from "./Sagas";
import { save, load } from "redux-localstorage-simple";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const rootReducer = combineReducers({
      deploymentState: deploymentReducer
      
    });

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      rootReducer,
      load(),
      composeEnhancers(applyMiddleware(sagaMiddleware, save()))
    );
    sagaMiddleware.run(watchAuth);
    
    export  {store};
    