import React from 'react'

const RoundToolTip = ({toolTipVisibility,iconLabel}) => {
  return (
    <div className= {`${toolTipVisibility} absolute lg:left-10 lg:top-1 min-w-max px-4 h-16 rounded-2xl bg-secondary text-white flex items-center justify-center animate-pulse`}>
        <p className='text-3xl font-helvetica'>{iconLabel}</p>
    </div>
  )
}

export default RoundToolTip;