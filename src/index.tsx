import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { configureStore } from './store/configureStore'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { RootContainer } from './scenes/root/RootContainer'
import { ConnectedRouter } from 'react-router-redux'
require('bootstrap/scss/bootstrap.scss')

const store = configureStore()
export const browserHistory = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <RootContainer />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)
