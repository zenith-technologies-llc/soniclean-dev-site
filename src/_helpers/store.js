import { compose, createStore,applyMiddleware } from 'redux';
import { cacheEnhancer } from 'redux-cache';
import rootReducer from 'modules';
import thunk from 'redux-thunk'

export default function configureStore(preloadedState) {

  const middlewares = [
    thunk
  ]

  const enhancers = [
    applyMiddleware(...middlewares),
  ]

  const composeEnhancers =
    (
      process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
      compose

  const store = createStore(
    rootReducer,
    composeEnhancers(...enhancers)
  )

  return { store };
}

export const { store } = configureStore();
