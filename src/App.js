import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { StartPage } from './StartPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Router>
  )
}