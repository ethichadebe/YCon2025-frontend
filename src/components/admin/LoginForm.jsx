import { useState } from 'react'

function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'yc2025') {
      console.log('✅ Admin logged in')
      onLoginSuccess()
    } else {
      console.warn('❌ Invalid login attempt')
      setError('Invalid credentials')
    }
  }

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: '400px', margin: '3rem auto' }}>
      <h2>Admin Login</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
