import React from 'react'
import Container from './Container'
import { Button } from './ui/button'
import Link from 'next/link'

function Header() {
  return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100  w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ResumePro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href={'/'}>Home</Link>
              <Button variant="ghost" className="ml-4">Log in</Button>
              <Link href={'/build-resume/personal-info'}> <Button variant={'cadetblue'} >Get Started</Button></Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Header