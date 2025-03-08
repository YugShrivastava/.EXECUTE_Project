import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'participant'
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Remove confirmPassword before sending to backend
      const { confirmPassword, ...signupData } = formData;
      
      // Replace with your API endpoint
      const response = await axios.post('http://localhost:3000/api/auth/register', signupData);
      
      setSuccess(true);
      // Redirect after successful signup
      setTimeout(() => {
        navigate('/login');
      }, 1000);
      
    } catch (error) {
      console.error('Signup error:', error);
      if (error.response && error.response.data && error.response.data.error) {
        // Handle specific backend errors
        setErrors({ submit: error.response.data.error });
      } else {
        setErrors({ submit: 'Signup failed. Please try again.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-w-screen flex bg-black text-white">
      {/* Left side with the form */}
      <div className="w-full md:w-1/2 flex items-center justify-center py-12 px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Create your account
            </h2>
            <div className="mt-3 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
          </div>
          
          {success ? (
            <div className="bg-purple-900 border border-purple-700 text-white px-6 py-4 rounded-lg shadow-lg" role="alert">
              <strong className="font-bold">Success! </strong>
              <span className="block sm:inline">Your account has been created. Redirecting to login...</span>
            </div>
          ) : (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {errors.submit && (
                <div className="bg-red-900 border border-red-800 text-white px-4 py-3 rounded-lg shadow-lg" role="alert">
                  <span className="block sm:inline">{errors.submit}</span>
                </div>
              )}
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-1">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-4 py-3 border ${
                      errors.name ? 'border-red-500' : 'border-purple-800'
                    } rounded-lg bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-4 py-3 border ${
                      errors.email ? 'border-red-500' : 'border-purple-800'
                    } rounded-lg bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-purple-300 mb-1">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-4 py-3 border ${
                      errors.password ? 'border-red-500' : 'border-purple-800'
                    } rounded-lg bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm`}
                    placeholder="Create a password"
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-purple-300 mb-1">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-4 py-3 border ${
                      errors.confirmPassword ? 'border-red-500' : 'border-purple-800'
                    } rounded-lg bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>}
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-purple-300 mb-1">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="appearance-none block w-full px-4 py-3 border border-purple-800 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
                  >
                    <option value="participant">Participant</option>
                    <option value="organizer">Organizer</option>
                  </select>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${
                    isLoading ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-lg transition duration-150 ease-in-out`}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing up...
                    </span>
                  ) : 'Sign up'}
                </button>
              </div>
              
              <div className="text-sm text-center">
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <a href="/login" className="font-medium text-purple-400 hover:text-purple-300 transition duration-150 ease-in-out">
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
      
      {/* Right side for decoration or empty space */}
 <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-black via-purple-900 to-black">
  <div className="h-full flex items-center justify-center">
    <div className="p-12 max-w-lg">
      {/* Replace the purple circle with an image */}
      <img 
        src="path-to-your-image.jpg" 
        alt="Community Image" 
        className="w-24 h-24 rounded-full mb-8 opacity-80" 
      />
      <h3 className="text-3xl font-bold text-white mb-4">Join our community</h3>
      <p className="text-purple-200 text-lg mb-6">Create an account to access exclusive features and connect with other members.</p>
      <div className="space-y-2">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
          <p className="text-white">Participate in events</p>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
          <p className="text-white">Connect with organizers</p>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
          <p className="text-white">Stay updated on activities</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default SignupPage;