import React from 'react'

const Button = ({text, color}) => {
  return <button className='border py-2 px-10 rounded-xl' style={{backgroundColor: color}}>{text}</button>
}

export default Button