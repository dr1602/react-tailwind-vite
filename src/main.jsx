import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Components/Layout/index.jsx'
import App from './Pages/App/Index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
        <App />
    </Layout>
  </React.StrictMode>,
)
