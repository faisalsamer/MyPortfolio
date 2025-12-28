'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Hero () {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id='about'
      className='flex justify-center pt-12 md:pt-16 lg:pt-20 pb-15 px-4 sm:px-6 md:px-8'
    >
      <div className='flex flex-col items-center w-full max-w-4xl'>
        <h1
          className='text-5xl font-bold mb-8 scroll-animate fade-up'
          style={{
            color: 'var(--ui-heading-color)',
            fontFamily: 'var(--font-family-primary)'
          }}
        >
          Faisal Samer
        </h1>
        <p
          className='text-xl text-center max-w-3xl px-4 scroll-animate fade-up delay-200'
          style={{ color: 'var(--ui-subheading-color)', lineHeight: 1.35 }}
        >
          Full-stack software engineer specializing in React.js and Next.js
          applications, with expertise in building production-ready systems from
          planning and design through deployment. Developed TenancyPilot, a live
          property management SaaS serving 200+ users with integrated payment
          processing, and led frontend development for a restaurant POS system.
          Strong focus on clean architecture, database design, performance
          optimization, and scalable solutions with proven ability to deliver
          end-to-end applications independently.
        </p>

        <div
          className='relative w-48 sm:w-56 md:w-64 lg:w-72 rounded-full aspect-square z-10 mt-6 scroll-animate scale-in delay-400'
          style={{ backgroundColor: 'var(--color-gray-300)' }}
        >
          {/* Glow effect */}
          <div
            className='absolute inset-[-25px] rounded-full opacity-[0.08] blur-[50px]'
            style={{
              background:
                'linear-gradient(to right, var(--color-primary-purple), var(--color-primary-blue), #6366f1)'
            }}
          />

          {/* Spinning border */}
          <div
            className='absolute inset-[-8px] rounded-full border-2 border-dashed z-[-1] animate-spin-slow'
            style={{ borderColor: 'var(--color-primary-purple)' }}
          />

          {!imageError ? (
            <Image
              src='/projectImages/profile.jpg'
              alt='Faisal Samer'
              fill
              className='rounded-full object-cover relative z-10'
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className='w-full h-full rounded-full flex items-center justify-center text-6xl font-bold'
              style={{
                backgroundColor: 'var(--color-primary-purple)',
                color: 'white'
              }}
            >
              FS
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
