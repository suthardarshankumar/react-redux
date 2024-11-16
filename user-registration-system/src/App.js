import React from 'react'
import RegistrationForm from './components/RegistrationForm'

const App = () => {
  return (
    <div
      className="min-h-screen min-w-screen bg-slate-50 text-slate-900"
    >
      <h1 className='text-4xl text-center pt-7 text-slate-900'>User Registration</h1>
      <RegistrationForm />
    </div>
  )
}

export default App