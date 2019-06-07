import { compose, createStore,applyMiddleware } from 'redux';
import { cacheEnhancer } from 'redux-cache';
import rootReducer from '../_reducers';
import * as actionCreators from '../_actions';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk'



export default function configureStore(preloadedState) {
  // -- REDUX LOGGER --
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators });
  if (!enhancer) {
    console.warn('Install Redux DevTools Extension to inspect the app state: ' +
      'https://github.com/zalmoxisus/redux-devtools-extension#installation')
  }

  const migrations = {
    0: (state) => {
      // migration that clear the Redux store
      return {}
    }
  }

  const persistConfig = {
    key: 'root',
    version: 0,
    storage,
    migrate: createMigrate(migrations, { debug: false }),
    blacklist: ["form", ]
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, preloadedState, ((!enhancer) ?  compose(applyMiddleware(thunk),cacheEnhancer()) : compose(applyMiddleware(thunk),enhancer, cacheEnhancer())));
  const persistor = persistStore(store)

  if (module.hot) {
    module.hot.accept('../_reducers', () => {
      const nextReducer = require('../_reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return { store, persistor };
}

export const {store, persistor} = configureStore();
