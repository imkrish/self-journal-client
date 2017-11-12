import * as React from 'react'
import { connect } from 'react-redux'

const Root = () => {
    return (
        <div>
            <h1>I am a root container!</h1>
        </div>
    )
}

export const RootContainer = connect(
    null,
    null
)(Root)
