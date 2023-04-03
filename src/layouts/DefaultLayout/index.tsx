import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className="h-screen overflow-auto w-screen bg-base-background">
      <Header />
      <main className="max-w-4xl w-full mx-auto max-sm:px-4 max-lg:px-4">
        <Outlet />
      </main>
    </div>
  )
}
