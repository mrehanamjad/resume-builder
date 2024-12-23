'use client'
import React, { useState, useEffect } from 'react'
import { useAppSelector } from "@/lib/store/hooks";
import { useRouter } from 'next/navigation' 


interface ProtectedProps {
    children: React.ReactNode;
    authentication?: boolean;
  }
  

export default function Protected({ children, authentication = true }:ProtectedProps) {

    const router = useRouter()
    const [loader, setLoader] = useState(true)
    const authStatus = useAppSelector((state) => state.auth.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        if (authentication && authStatus !== authentication) { 
            router.push('/login')
        } else if (!authentication && authStatus !== authentication) { 
            router.push('/')
        }

        setLoader(false)
    }, [authStatus, authentication, router])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}