import { BrowserRouter } from 'react-router-dom'
import { BlogProvider } from './contexts/BlogContext'
import { Router } from './Router'

export function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </BlogProvider>
  )
}