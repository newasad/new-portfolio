import React from 'react'

const ProgressBarCercle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <defs>
            <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#DA22FF" />
            <stop offset="100%" stop-color="#9733EE" />
            </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
    </svg>
  )
}

export default ProgressBarCercle