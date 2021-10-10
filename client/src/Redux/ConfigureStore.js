import { applyMiddleware, createStore } from 'redux';
import createRootReducer from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

function ConfigureStore(initialState) {
  const middleware = [thunk, routerMiddleware(history)];
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
}

export default ConfigureStore;
