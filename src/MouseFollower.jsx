import React, { useEffect, useRef } from 'react';

const MouseFollower = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    let ringX = mouseX;
    let ringY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;
    
    let animationId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) dotRef.current.style.opacity = 1;
      if (ringRef.current) ringRef.current.style.opacity = 1;
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = 0;
      if (ringRef.current) ringRef.current.style.opacity = 0;
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = 1;
      if (ringRef.current) ringRef.current.style.opacity = 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const animate = () => {
      // The inner dot follows the mouse instantly to preserve immediate feedback
      dotX += (mouseX - dotX) * 1.0;
      dotY += (mouseY - dotY) * 1.0;

      // The outer ring eases (lerps) towards the mouse position smoothly
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Outer easing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-brand-red rounded-full pointer-events-none z-[9999] will-change-transform bg-transparent hidden md:block mix-blend-difference"
        style={{ opacity: 0, transition: 'opacity 0.2s ease' }}
      ></div>
      
      {/* Instant inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-red rounded-full pointer-events-none z-[10000] will-change-transform hidden md:block mix-blend-difference"
        style={{ opacity: 0, transition: 'opacity 0.2s ease' }}
      ></div>
    </>
  );
};

export default MouseFollower;
