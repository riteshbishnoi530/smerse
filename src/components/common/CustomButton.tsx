import React from 'react'
interface CustomButtonProps {
    btn: string
    myClass: string
}
function CustomButton({btn, myClass}:CustomButtonProps) {
  return (
    <button className={`py-[11px] px-5 bg-gradient-to-t to-light-purple via-light-pink from-light-orange shadow-[0px_4px_4px_0px] shadow-light-orange text-white text-xl font-extrabold tracking-[2px] leading-6 rounded-lg hover:bg-gradient-to-bl  ${myClass}`}>{btn}</button>
  )
}

export default CustomButton