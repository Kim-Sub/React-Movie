import React from "react"

const ButtonToTop = () => {
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      })
   }

   return (
      <button className='GoTop' onClick={scrollToTop}
         style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            padding: "10px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
         }}
      >
         GO TOP
      </button>
   )
}

export default ButtonToTop
