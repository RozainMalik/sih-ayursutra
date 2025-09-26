import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Chinar from "../assets/ChinarLogo.png";
import sih from "../assets/SIHlogo.png";
import ayursutraLogo from "../assets/Logo.png";




export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.username ||!formData.password) {
      alert('Please fill all fields correctly!');
      return;
    }

    navigate('/dashboard');
  };

  return (
    
    <div className=" flex items-center justify-center p-6 bg-white]">
        {/* on the left side -- form */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold  text-green-900 mb-2">Login</h2>
          <p className="text-gray-500">Please enter your credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <User size={20} />
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 placeholder-gray-500 transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Lock size={20} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-50 placeholder-gray-500 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-all shadow-lg"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signUp" className="text-green-700 font-medium hover:underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>

      {/* on the right side */}
      <div className='flex flex-col md:flex-row items-stretch justify-center min-h-screen p-10 '>
            <div className="absolute top-6 left-6 z-10">
                    <img src={Chinar} alt="Team Logo" className="w-40 h-30 object-contain" />
            </div>
            <div className="absolute top-6 right-6 z-10">
                    <img src={sih} alt="SIH Logo" className="w-16 h-16 object-contain" />
            </div>
            <div className="flex items-center justify-center">
                <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] p-10 m-6 ml-32"
                        style={{
                            backgroundImage: `url(${ayursutraLogo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '50px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 10px rgba(0, 0, 0, 0.2)',
                        }}>
                    </div>
            </div>
      </div>
    </div>
  );
}

