import React, { useEffect, useRef } from 'react';

const MouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (followerRef.current) {
        followerRef.current.style.opacity = 1;
        followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseLeave = () => {
      if (followerRef.current) {
        followerRef.current.style.opacity = 0;
      }
    };

    const handleMouseEnter = () => {
      if (followerRef.current) {
        followerRef.current.style.opacity = 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 w-8 h-8 border-2 border-brand-red rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out will-change-transform bg-transparent hidden md:flex items-center justify-center"
      style={{ opacity: 0 }}
    >
      <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
    </div>
  );
};

export default MouseFollower;
