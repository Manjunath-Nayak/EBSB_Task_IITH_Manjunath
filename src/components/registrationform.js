import React, {useState} from 'react'
import './registrationform.css' // Adjusted path for the CSS file

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    eventName: '',
    comments: '',
  })

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.eventName
    ) {
      alert('Please fill in all required fields.')
      return
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Registration successfull!')
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          eventName: '',
          comments: '',
        })
      } else {
        alert('Registration failed.')
      }
    } catch (error) {
      alert('An error occurred while submitting the form.')
    }
  }

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>EBSB Event Registration</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm
