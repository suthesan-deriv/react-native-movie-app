import MainStack from "./stack/mainStack";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from "@redux-saga/core";
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import mySaga from './sagas/saga'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({reducer})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)

export default function App() {
  return (
    <Provider store={store}>
      <MainStack/>
    </Provider>
  );
}