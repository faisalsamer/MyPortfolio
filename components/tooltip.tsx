'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface TooltipProps {
  content: string
  children: React.ReactNode
  className?: string
}

export default function Tooltip({ content, children, className = '' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })
  const [position, setPosition] = useState<'top' | 'bottom'>('bottom')
  const [isTruncated, setIsTruncated] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Check if content is truncated
  useEffect(() => {
    const checkTruncation = () => {
      if (triggerRef.current) {
        const element = triggerRef.current.querySelector('p') || triggerRef.current
        const isTruncatedNow = element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth
        setIsTruncated(isTruncatedNow)
      }
    }

    checkTruncation()
    window.addEventListener('resize', checkTruncation)

    return () => {
      window.removeEventListener('resize', checkTruncation)
    }
  }, [children])

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const updatePosition = () => {
        if (!triggerRef.current || !tooltipRef.current) return

        const triggerRect = triggerRef.current.getBoundingClientRect()
        const tooltipRect = tooltipRef.current.getBoundingClientRect()
        const spaceAbove = triggerRect.top
        const spaceBelow = window.innerHeight - triggerRect.bottom

        // Determine if tooltip should be above or below
        const shouldBeAbove = spaceAbove > tooltipRect.height + 10 && spaceBelow < tooltipRect.height + 10
        setPosition(shouldBeAbove ? 'top' : 'bottom')

        // Calculate position
        const left = triggerRect.left + triggerRect.width / 2
        const top = shouldBeAbove
          ? triggerRect.top - 8
          : triggerRect.bottom + 8

        setTooltipPosition({ top, left })
      }

      updatePosition()
      window.addEventListener('scroll', updatePosition, true)
      window.addEventListener('resize', updatePosition)

      return () => {
        window.removeEventListener('scroll', updatePosition, true)
        window.removeEventListener('resize', updatePosition)
      }
    }
  }, [isVisible])

  const handleMouseEnter = () => {
    if (isTruncated) {
      setIsVisible(true)
    }
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isTruncated) {
      setIsVisible(!isVisible)
    }
  }

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        triggerRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false)
      }
    }

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isVisible])

  return (
    <>
      <div className={`inline-block ${className}`}>
        <div
          ref={triggerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className={isTruncated ? 'cursor-help' : 'cursor-default'}
        >
          {children}
        </div>
      </div>

      {/* Tooltip Portal */}
      {mounted && isVisible && createPortal(
        <div
          ref={tooltipRef}
          className={`fixed z-[9999] px-3 py-2 text-sm rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md transition-opacity duration-200 border ${
            position === 'top' ? '-translate-y-full' : ''
          }`}
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            transform: position === 'top'
              ? 'translate(-50%, -100%)'
              : 'translate(-50%, 0)',
            backgroundColor: 'var(--color-card)',
            borderColor: 'var(--color-gray-200)',
            color: 'var(--ui-text-color)',
            boxShadow: 'var(--ui-shadow-modern)',
          }}
        >
          <p className="text-sm leading-relaxed whitespace-normal break-words">
            {content}
          </p>

          {/* Arrow */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border ${
              position === 'top' ? '-bottom-1 border-t-0 border-l-0' : '-top-1 border-b-0 border-r-0'
            }`}
            style={{
              backgroundColor: 'var(--color-card)',
              borderColor: 'var(--color-gray-200)',
            }}
          />
        </div>,
        document.body
      )}
    </>
  )
}
