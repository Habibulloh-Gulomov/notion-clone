import React, { useEffect, useState } from 'react'

export const UseScrolled = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 10){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
  };
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
  }, []);
  return scrolled;
}
