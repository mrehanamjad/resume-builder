'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  FileText,
  Plus,
} from 'lucide-react';
import { useAppSelector } from '@/lib/store/hooks';
import LogoutBtn from './LogoutBtn';

const Header = ({ 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const authStatus = useAppSelector(state => state.auth.status)
  const userData = useAppSelector(state => state.auth.userData)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };





  const navigationItems = [
    {
      href: '/my-resumes',
      label: 'My Resumes',
      icon: FileText,
    },
    {
      href: '/build-resume',
      label: 'Create  Resume',
      icon: Plus,
    }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">ResumePro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {authStatus && navigationItems.map((item, index) => (
              
                <Link 
                  key={index}
                  href={item.href}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Link>
          
            ))}
            
            {!authStatus ? (
              <>
                <Link href={'/login'}>
                  <Button variant="ghost" className="ml-4">
                    Log in
                  </Button>
                </Link>
                <Link href={'/build-resume/personal-info'}>
                  <Button variant={'cadetblue'}>Get Started</Button>
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={toggleProfile}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <User className="h-5 w-5 " />
                </button>

                {/* Desktop Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100">
                    <div className="flex flex-col items- px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <span className='text-[cadetblue] font-semibold'>{userData?.name}</span>
                      <span className='text-gray-500'>{userData?.email}</span>
                    </div>
                   <LogoutBtn />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            {authStatus ? (
              <>
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                ))}
                <div className="  bg-white rounded-md shadow-lg py-1 border border-gray-100">
                    <div className="flex flex-col items- px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <span className='text-[cadetblue] font-semibold'>{userData?.name}</span>
                      <span className='text-gray-500'>{userData?.email}</span>
                    </div>
                   <LogoutBtn />
                  </div>
              </>
            ) : (
              <>
                <Link
                  href={'/login'}
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href={'/build-resume/personal-info'}
                  className="block px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant={'cadetblue'} className="w-full">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
