import { useState } from 'react'
import LoginForm from '../components/admin/LoginForm'
import Dashboard from '../components/admin/Dashboard'

function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      {loggedIn ? (
        <Dashboard />
      ) : (
        <LoginForm onLoginSuccess={() => setLoggedIn(true)} />
      )}
    </>
  )
}

export default AdminPage
