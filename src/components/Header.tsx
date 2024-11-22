import React from 'react'
import Container from './Container'
import { Button } from './ui/button'

function Header() {
  return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100  w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ResumePro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <Button variant="outline" className="ml-4">Log in</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Header