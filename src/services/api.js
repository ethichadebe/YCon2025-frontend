import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // ✅ Change this to your backend domain on deployment
})

export const registerUser = async (formData) => {
  try {
    const response = await API.post('/register', formData)
    return response.data
  } catch (error) {
    console.error('❌ Registration failed:', error)
    throw error.response?.data || { message: 'Something went wrong' }
  }
}

export const getRegistrations = async () => {
  try {
    const response = await API.get('/registrations')
    return response.data
  } catch (error) {
    console.error('❌ Failed to fetch registrations:', error)
    throw error.response?.data || { message: 'Something went wrong' }
  }
}
