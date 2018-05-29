import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { 
    BrowserRouter as Router,
} from 'react-router-dom';

import './index.css';
import { AppContainer } from 'react-hot-loader';
// import App from './components/App';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { configureStore } from './store';

// Import Routes
import routes from './routes';

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const enhancers = [
    applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
];

const store = createStore(
    rootReducer,
    {},
    compose(...enhancers)
)
sagaMiddleware.run(rootSaga)

// const store = configureStore();


ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router>
                {routes}
            </Router>
        </Provider>
    </AppContainer>, 
    document.getElementById('root')
);
registerServiceWorker();


