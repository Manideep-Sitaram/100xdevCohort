import { useState } from 'react'
import RevenueCard from './components/RevenueCard'

function App() {
 

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      <RevenueCard title={"Next Payout"} amount={"₹2,312.23"} orderCount={23}/>
      <RevenueCard title={"Amount Pending"} amount={"₹92,312.20"} orderCount={13}/>
      <RevenueCard title={"Amount Processed"} amount={"₹23,92,312.19"} />
    </div>
    </>
  )
}

export default App
