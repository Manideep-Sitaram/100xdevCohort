import React from "react";

export function RevenueCard({ title, amount, orderCount = null }) {
  const isPayout = title === "Next Payout";
  return (
    <div>
      <div
        className={`${
          isPayout ? "bg-customBlue text-white hover:bg-customHoverBlue rounded-t" : "bg-white rounded"
        } p-2 shadow-md`}
      >
        <div className="flex">
          <div className={isPayout ? "text-white py-3" : "text-gray-600 py-3"}>
            {title}
          </div>
          <div className="pl-2 flex flex-col justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="font-semibold text-2xl">{amount}</div>
          {orderCount ? (
            <div className="flex">
              <div
                className={`${
                  isPayout ? "text-white" : "text-blue-600"
                } stext-lg underline flex flex-col justify-end`}
              >
                {orderCount} Orders
              </div>
              <div className=" flex flex-col justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blue"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {isPayout && (
          <div className="bg-customHoverBlue flex justify-between px-4 py-2 text-white text-sm content-center rounded-b">
            <div>Next Payment Date:</div>
            <div>Today, 4:00PM</div>
          </div>
        )}
    </div>
  );
}

export default RevenueCard;
