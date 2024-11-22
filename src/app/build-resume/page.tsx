'use client'
import ResumeSections from '@/components/ResumeSections'
import { useAppSelector } from '@/lib/store/hooks'
import React from 'react'

function Page() {

    const resume = useAppSelector(state => state.resume)
    console.log(resume)
  return (
    <div>
        <ResumeSections />
    </div>
  )
}

export default Page