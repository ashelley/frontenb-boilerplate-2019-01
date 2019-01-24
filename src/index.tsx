import React from 'react'
import {render as renderReactApp} from 'react-dom'
import App from './App'

renderReactApp(
    <App />,
    document.getElementById('app')
);
