import { useState } from "react";
import axios from 'axios';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    });
    const [message, setMessage] = useState('');

    const { username, email, password } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
          const res = await axios.post('http://localhost:3001/api/auth/register', {
              username,
              email,
              password
          });
          setMessage('Registered successfully'); 
      } catch (err: any) {
          console.error(err.response.data);
          setMessage('Failed to register, User already exists'); 
      }
    };

  return (
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="flex-1 flex items-center justify-center px-6 lg:px-16 bg-gray-50">
          <div className="max-w-md w-full -mt-20">
              <div className="text-center">
                  <img
                      alt="PawPal"
                      src="/src/assets/images/paw-icon.png"
                      className="mx-auto h-12 w-auto"
                  />
                  <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                      Welcome to PawPal
                  </h2>
                  <p className="mt-2 text-xl text-gray-600">
                      Create your account
                  </p>
              </div>

              <div className="mt-8 bg-white py-8 px-6 shadow rounded-lg">
                  <form onSubmit={onSubmit} className="space-y-6">
                      <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                              Email address
                          </label>
                          <div className="mt-1">
                              <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  required
                                  value={email}
                                  onChange={onChange}
                                  autoComplete="email"
                                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                          </div>
                      </div>
                      <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <div className="mt-1">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    value={username}
                                    onChange={onChange}
                                    autoComplete="username"
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                      <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                              Password
                          </label>
                          <div className="mt-1">
                              <input
                                  id="password"
                                  name="password"
                                  type="password"
                                  required
                                  value={password}
                                  onChange={onChange}
                                  autoComplete="current-password"
                                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                          </div>
                      </div>

                      <div>
                          <button
                              type="submit"
                              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                              Register
                          </button>
                          <p className="mt-5 text-sm text-center text-gray-500">
                              Already have an account? <a href="/login" className="font-medium text-blue-500 hover:text-blue-600">Sign in here</a>
                          </p>
                      </div>
                  </form>
                  {message && (
                      <p className="mt-4 text-sm text-center text-gray-500">{message}</p>
                  )}
              </div>
          </div>
        </div>
        <div className="hidden md:block flex-1 bg-gray-100">
        <img
          src="/src/assets/images/catregister.jpg"
          alt="Pet Care"
        />
      </div>
      </div>
  );
};

export default Register;