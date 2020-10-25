import React from 'react'
import ReactDOM from 'react-dom'

import 'materialize-css/dist/css/materialize.min.css'
import './index.css'

import App from './App'
import { addClass } from './utils/styleFunctions'

addClass(document.querySelector('body'), 'light-theme')

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
