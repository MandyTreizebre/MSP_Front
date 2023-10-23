import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {Provider} from "react-redux"

import {BrowserRouter} from "react-router-dom"

import store from "./slices/store.jsx"

/*import { AdminProvider } from './components/AdminContext.jsx'*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
)
