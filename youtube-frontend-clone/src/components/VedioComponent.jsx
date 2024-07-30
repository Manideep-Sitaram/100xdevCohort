import React from 'react'

function VedioComponent() {
  return (
    <div className='p-2'>
        <img src="./photo.jpg" alt="" className='rounded-xl'/>
        <div className="grid grid-cols-12 pt-2">
          <div className="col-span-1">
          <img src="./photo.jpg" alt="" className='rounded-full w-10 h-10 '/>
          </div>
          <div className="col-span-11 pl-2">
            <div className="text-black font-semibold">
            Fear Song | Devara Part(1) | NTR | Koratala Siva
            </div>
            <div className="text-gray-600 text-base">
              Manideep Sitaram
            </div>
            <div className="text-gray-600 text-base">
              5.6Mn | 15 days ago
            </div>
          </div>
        </div>
    </div>
  )
}

export default VedioComponent