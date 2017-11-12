import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerReducer } from 'react-router-redux'
import { rootReducer } from './reducers/rootReducer'
import { rootEpic } from './epics/rootEpic'

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            ...rootReducer,
            router: routerReducer
        }),
        composeWithDevTools(
            applyMiddleware(
                createEpicMiddleware(rootEpic)
            )
        )
    )
    return store
}
