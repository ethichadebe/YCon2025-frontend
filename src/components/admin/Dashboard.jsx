import { useEffect, useState } from 'react'
import { getRegistrations } from '../../services/api'
import './Dashboard.css'

function Dashboard() {
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRegistrations()
        setRegistrations(data)
        console.log('✅ Registrations loaded:', data.length)
      } catch (err) {
        alert(err.message || 'Failed to load registrations')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>

  return (
    <div className="admin-container">
      <h2>Registered Youth ({registrations.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th><th>Age</th><th>Gender</th>
            <th>Church</th><th>Division</th><th>Phone</th><th>Email</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map(reg => (
            <tr key={reg.id}>
              <td>{reg.fullName}</td><td>{reg.age}</td><td>{reg.gender}</td>
              <td>{reg.church}</td><td>{reg.division}</td><td>{reg.phone}</td><td>{reg.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
