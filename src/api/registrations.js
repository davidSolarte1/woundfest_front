import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

export const createRegistration = (data) => api.post('/registrations/', data)

export const getRegistrationStatus = () => api.get('/registrations/status/')

export const listRegistrations = () => api.get('/registrations/')
