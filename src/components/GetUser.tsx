"use client"
import authService from '@/appwrite/auth'
import { login, logout } from '@/lib/store/auth/authSlice'
import { useAppDispatch } from '@/lib/store/hooks'
import React, { ReactNode, useEffect, useState } from 'react'

function GetUser({children}: {children: ReactNode}) {
    const dispach = useAppDispatch()
  
    useEffect(() => {
      authService.getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispach(login({ userData }))
          } else {
            dispach(logout())
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        })
    }, [])
  return (
    <div>{children}</div>
  )
}

export default GetUser