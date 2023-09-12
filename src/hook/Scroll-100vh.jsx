import React, { useState, useEffect, useRef, useCallback } from 'react'

const HorizonScrollBar = () => {
   const [scrollPercentage, setScrollPercentage] = useState(0)

   const handleScroll = () => {
      const documentHeight = Math.round(document.documentElement.scrollHeight)
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      const percentage = (scrollY / (documentHeight - windowHeight)) * 100
      setScrollPercentage(percentage)
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <div
         id='HorizonScrollBar'
         style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '5px',
            backgroundColor: '#333',
            overflow: 'hidden',
            zIndex: '1000'
         }}
      >
         <div
            className='progress-bar'
            style={{
               width: `${scrollPercentage}%`,
               height: '5px',
               backgroundColor: '#E81D36'
            }}
         />
      </div>
   )
}

const Scroll100vh = ({ children }) => {
   const scrollDistance = window.innerHeight
   const scrollDuration = 400

   const [isScrolling, setIsScrolling] = useState(false)
   const touchStartY = useRef(null)

   const smoothScrollBy = useCallback((amount, duration) => {
      setIsScrolling(true)
      const start = window.scrollY
      const target = start + amount
      const startTime = performance.now()

      const animateScroll = (currentTime) => {
         const elapsedTime = currentTime - startTime
         if (elapsedTime < duration) {
            const ease = easeInOutQuad(elapsedTime, 0, 1, duration)
            window.scrollTo(0, start + ease * amount)
            requestAnimationFrame(animateScroll)
         } else {
            window.scrollTo(0, target)
            setIsScrolling(false)
         }
      }

      requestAnimationFrame(animateScroll)
   }, []) 

   const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
   }

   const handleTouchStart = useCallback(
      (event) => {
         if (isScrolling) return
         touchStartY.current = event.touches[0].clientY
      },
      [isScrolling]
   )

   const handleTouchMove = useCallback(
      (event) => {
         if (isScrolling || touchStartY.current === null) return
         const touchY = event.touches[0].clientY
         const deltaY = touchY - touchStartY.current
         const scrollAmount = deltaY > 0 ? -scrollDistance : scrollDistance
         smoothScrollBy(scrollAmount, scrollDuration)
         touchStartY.current = touchY
      },
      [isScrolling, scrollDistance, scrollDuration, smoothScrollBy]
   )

   const handleScroll = useCallback(
      (event) => {
         if (isScrolling) return
         const scrollAmount = event.deltaY > 0 ? scrollDistance : -scrollDistance
         smoothScrollBy(scrollAmount, scrollDuration)
      },
      [isScrolling, scrollDistance, scrollDuration, smoothScrollBy]
   )

   useEffect(() => {
      const container = document.getElementById('scroll-container')
      container.addEventListener('wheel', handleScroll, { passive: false })
      container.addEventListener('touchstart', handleTouchStart, { passive: false })
      container.addEventListener('touchmove', handleTouchMove, { passive: false })

      return () => {
         container.removeEventListener('wheel', handleScroll)
         container.removeEventListener('touchstart', handleTouchStart)
         container.removeEventListener('touchmove', handleTouchMove)
      }
   }, [handleScroll, handleTouchStart, handleTouchMove])

   return (
      <div id='scroll-container'>
         <HorizonScrollBar />
         {children}
      </div>
   )
}

export default Scroll100vh
