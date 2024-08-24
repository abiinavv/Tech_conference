import React,{ useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false); // State to toggle the form visibility


  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/api/register', {
        username,
        email,
        password,
      });
      
      if (response.status === 200) {
        setMessage('Registration successful!');
        setUsername('');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
    
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">InnovateLeap 2024</h1>
        <p className="text-lg mb-6">
          Join us for an exciting tech conference featuring industry leaders and innovative technologies!
        </p>
        <button
          onClick={() => setShowForm(!showForm)} // Toggle form visibility
          className="bg-yellow-500 text-blue-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition"
        >
          {showForm ? 'Close Registration' : 'Register Now'}
        </button>
      </section>

      {/* Conditional Registration Form */}
      {showForm && (
        <div className="p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Register for the Conference</h1>
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Register
            </button>
          </form>

          {error && <p className="text-red-600 mt-4">{error}</p>}
          {message && <p className="text-green-600 mt-4">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default Hero;
