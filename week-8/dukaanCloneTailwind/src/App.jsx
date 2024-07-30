import { useState } from "react";
import RevenueCard from "./components/RevenueCard";
import AppBar from "./components/AppBar";

function App() {
  return (
    <>
      <div className="m-5">
        <AppBar />
        <div className="flex justify-between mb-5">
          <div>Overview</div>
          <div className="text-sm text-gray-600">
            <select name="This Month" id="">
              <option>This Month</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <RevenueCard
            title={"Next Payout"}
            amount={"₹2,312.23"}
            orderCount={23}
          />
          <RevenueCard
            title={"Amount Pending"}
            amount={"₹92,312.20"}
            orderCount={13}
          />
          <RevenueCard title={"Amount Processed"} amount={"₹23,92,312.19"} />
        </div>
      </div>
    </>
  );
}

export default App;
