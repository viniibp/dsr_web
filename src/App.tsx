import { BrowserRouter } from 'react-router-dom'

import { Router } from './routes/router'
import { Layout } from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export default App
