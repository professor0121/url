import React, { useState } from 'react';
import { User, Mail, Lock, Facebook, Chrome } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/features/auth/authThunks.js";

export default function AuthComponent() {
    const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);
    const error = useSelector((state) => state.auth.error);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-2 sm:p-4">
            {/* Desktop/Tablet Layout */}
            <div className="hidden md:flex w-full max-w-6xl h-[85vh] min-h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden relative">
                {/* Sliding Background Panel */}
                <div
                    className={`absolute top-0 w-1/2 h-full bg-gradient-to-br from-teal-400 to-teal-600 transition-all duration-700 ease-in-out z-50 rounded-l-2xl ${isSignUp ? 'left-1/2 rounded-r-2xl rounded-l-none' : 'left-0'
                        }`}
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
                        <div className="absolute bottom-20 right-8 w-16 h-16 bg-white rounded-full"></div>
                        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white rounded-full"></div>
                    </div>

                    {/* Logo */}
                    <div className="absolute top-6 left-6 flex items-center space-x-2 z-10">
                        <div className="w-6 h-6 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-sm"></div>
                        </div>
                        <span className="text-lg font-semibold text-white">Diprella</span>
                    </div>

                    {/* Welcome Content */}
                    <div className="flex flex-col justify-center items-center h-full text-white text-center z-10 px-8 relative">
                        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-4">
                            {isSignUp ? 'Welcome Back!' : 'Hello, Friend!'}
                        </h1>
                        <p className="text-sm lg:text-lg mb-8 text-teal-100 max-w-xs">
                            {isSignUp
                                ? 'To keep connected with us please login with your personal info'
                                : 'Enter your personal details and start your journey with us'
                            }
                        </p>

                        <button
                            onClick={toggleMode}
                            className="px-6 lg:px-8 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-teal-500 transition-all duration-300 transform hover:scale-105 text-sm"
                        >
                            {isSignUp ? 'SIGN UP' : 'SIGN IN'}
                        </button>
                    </div>
                </div>

                {/* Left Panel - Sign In Form */}
                <div className={`flex-1 flex flex-col justify-center items-center px-6 lg:px-8 py-6 bg-white relative z-10 transition-all duration-700 ease-in-out ${!isSignUp ? 'opacity-100 transform translate-x-0' : 'opacity-60 transform -translate-x-4'
                    }`}>
                    <div className="w-full max-w-sm transition-all duration-700 ease-in-out">
                        {/* Header */}
                        <div className="text-center mb-6 transition-all duration-700 ease-in-out">
                            <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
                                Sign In
                            </h2>

                            {/* Social Login Buttons */}
                            <div className="flex justify-center space-x-3 mb-4">
                                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                                    <Facebook className="w-4 h-4 text-blue-600" />
                                </button>
                                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                                    <Chrome className="w-4 h-4 text-red-500" />
                                </button>
                                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                                    <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </button>
                            </div>

                            <p className="text-gray-500 text-xs mb-6">
                                or use your email account:
                            </p>
                        </div>

                        {/* Sign In Form */}
                        <div className="space-y-4 transition-all duration-700 ease-in-out">
                            {/* Email field */}
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    onChange={setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-sm"
                                />
                            </div>

                            {/* Password field */}
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    onChange={(e)=>setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                    className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-sm"
                                />
                            </div>

                            {/* Forgot Password */}
                            <div className="text-right">
                                <button className="text-teal-600 hover:text-teal-700 text-xs">
                                    Forgot your password?
                                </button>
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105 text-sm">
                                SIGN IN
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Sign Up Form */}
                <div className={`flex-1 flex flex-col justify-center items-center px-6 lg:px-8 py-6 bg-white relative z-10 transition-all duration-700 ease-in-out ${isSignUp ? 'opacity-100 transform translate-x-0' : 'opacity-60 transform translate-x-4'
                    }`}>
                    <div className="w-full max-w-sm transition-all duration-700 ease-in-out">
                        {/* Header */}
                        <div className="text-center mb-6 transition-all duration-700 ease-in-out">
                            <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
                                Create Account
                            </h2>

                            {/* Social Login Buttons */}
                            <div className="flex justify-center space-x-3 mb-4">
                                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                                    <Facebook className="w-4 h-4 text-blue-600" />
                                </button>
                                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                                    <Chrome className="w-4 h-4 text-red-500" />
                                </button>
                                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                                    <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </button>
                            </div>

                            <p className="text-gray-500 text-xs mb-6">
                                or use your email for registration:
                            </p>
                        </div>

                        {/* Sign Up Form */}
                        <div className="space-y-4 transition-all duration-700 ease-in-out">
                            {/* Name field */}
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    type="text"
                                    placeholder="Name"
                                    className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-sm"
                                />
                            </div>

                            {/* Email field */}
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-sm"
                                />
                            </div>

                            {/* Password field */}
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                    className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-sm"
                                />
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105 text-sm">
                                SIGN UP
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden w-full max-w-sm mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Mobile Header with Logo */}
                    <div className="bg-gradient-to-br from-teal-400 to-teal-600 p-6 text-center relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full"></div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full"></div>
                            <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-white rounded-full"></div>
                        </div>

                        {/* Logo */}
                        <div className="flex items-center justify-center space-x-2 mb-4 relative z-10">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                            <span className="text-xl font-semibold text-white">Diprella</span>
                        </div>

                        <h1 className="text-2xl font-bold text-white mb-2 relative z-10">
                            {isSignUp ? 'Create Account' : 'Welcome Back'}
                        </h1>
                        <p className="text-teal-100 text-sm relative z-10">
                            {isSignUp
                                ? 'Join us and start your journey'
                                : 'Sign in to continue'
                            }
                        </p>
                    </div>

                    {/* Mobile Form Content */}
                    <div className="p-6">
                        {/* Toggle Buttons */}
                        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                            <button
                                onClick={() => setIsSignUp(false)}
                                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${!isSignUp
                                        ? 'bg-white text-teal-600 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setIsSignUp(true)}
                                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${isSignUp
                                        ? 'bg-white text-teal-600 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex justify-center">
                                <Facebook className="w-5 h-5 text-blue-600" />
                            </button>
                            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex justify-center">
                                <Chrome className="w-5 h-5 text-red-500" />
                            </button>
                            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex justify-center">
                                <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </button>
                        </div>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    or use your email
                                </span>
                            </div>
                        </div>

                        {/* Mobile Form Fields */}
                        <div className="space-y-4">
                            {/* Name field - only for sign up */}
                            {isSignUp && (
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50"
                                    />
                                </div>
                            )}

                            {/* Email field */}
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50"
                                />
                            </div>

                            {/* Password field */}
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50"
                                />
                            </div>

                            {/* Forgot Password - only for sign in */}
                            {!isSignUp && (
                                <div className="text-right">
                                    <button className="text-teal-600 hover:text-teal-700 text-sm">
                                        Forgot password?
                                    </button>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button className="w-full bg-teal-500 text-white py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105 text-base">
                                {isSignUp ? 'CREATE ACCOUNT' : 'SIGN IN'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}