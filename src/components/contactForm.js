
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState('');  // To handle status messages like success/failure

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", contactData);
  
    try {
      // Sending email using Axios to your backend API
      const response = await axios.post('http://localhost:5000/api/contact/send-email', contactData, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.data.success) {
        setStatus('Email sent successfully!');
        setContactData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending email.');
    }
  };

  return (
    <div className="border p-6 rounded-md shadow-sm">
      {/* Add the form tag and attach handleSubmit */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={contactData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className="border p-3 rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={contactData.email}
            onChange={handleChange}
            placeholder="Your Email *"
            className="border p-3 rounded w-full"
            required
          />
          <input
            type="text"
            name="phone"
            value={contactData.phone} 
            onChange={handleChange}
            placeholder="Your Phone *"
            className="border p-3 rounded w-full"
            required
          />
        </div>
        <textarea
          name="message"
          value={contactData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="border p-3 rounded w-full h-32 mb-4"
          required
        ></textarea>
        <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center text-lg">{status}</p>} {/* Display status message */}
    </div>
  );
};

export default ContactForm;
