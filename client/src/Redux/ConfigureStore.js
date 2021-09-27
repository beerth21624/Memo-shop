import { applyMiddleware, createStore } from 'redux';
import Reducers from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

function ConfigureStore(initialState) {
  const middleware = [];
  const store = createStore(
    Reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}

export default ConfigureStore;
