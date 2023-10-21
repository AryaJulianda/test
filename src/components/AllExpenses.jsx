import React, { useState } from "react"

const AllExpenses = ({data}) => {
  const [selectedValue, setSelectedValue] = useState('monthly');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="w-full flex flex-col bg-white p-5 gap-4 rounded-xl shadow-lg // max-xl:p-4 max-xl:gap-3 // max-lg:p-3 max-lg:gap-2">
          {/* header */}
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl font-semibold text-dark-blue // max-lg:text-lg">All Expenses</h1>
            <select className="flex flex-row p-3 rounded-xl border-2 border-[#f1f1f1] pr-10 select-custom cursor-pointer outline-primary-blue bg-[length:24px_24px] // max-xl:p-2 max-xl:pr-9 // max-lg:p-2 max-lg:pr-8 max-lg:text-sm max-lg:bg-[length:18px_18px] " onChange={handleSelectChange}>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          {/* cards */}
          <div className="flex flex-row gap-3 // max-xl:gap-2 // max-lg:gap-2">

            <div className="flex flex-col w-full p-5 gap-8 bg-primary-blue rounded-xl cursor-pointer justify-between // max-xl:p-4 max-xl:gap-7 // max-lg:p-3 max-lg:gap-6">
              <div className="flex flex-row justify-between">
                <img src="/icon/money.svg" alt="" className="min-w-8 p-3 rounded-full bg-[#ffffff20] // max-lg:min-w-6 max-lg:p-2" />
                <img src="/icon/arrow-white.svg" alt="" className="w-6 // max-lg:w-5"/>
              </div>
              <div className="flex flex-col items-start gap-2 // max-lg:gap-1">
                <h3 className="text-base font-semibold text-white // max-lg:text-sm">Balance</h3>
                <h4 className="text-sm text-[#fafafa] capitalize // max-lg:text-xs">{data?.[selectedValue].month} {data?.[selectedValue].year}</h4>
                <h1 className="text-2xl font-semibold text-white mt-2 // max-xl:text-xl // max-lg:text-lg">${data?.[selectedValue].balance}</h1>
              </div>
            </div>

            <div className="flex flex-col w-full p-5 gap-8 bg-white rounded-xl border-2 border-[#f1f1f1] cursor-pointer justify-between // max-xl:p-4 max-xl:gap-7 // max-lg:p-3 max-lg:gap-6">
              <div className="flex flex-row justify-between">
                <img src="/icon/card-receive.svg" alt="" className="min-w-8 p-3 rounded-full bg-[#f7f7f7] // max-lg:p-3 max-lg:w-12" />
                <img src="/icon/arrow.svg" alt="" className="w-6 -rotate-90 // max-lg:w-5"/>
              </div>
              <div className="flex flex-col items-start gap-2 // max-lg:gap-1">
                <h3 className="text-base font-semibold text-dark-blue // max-lg:text-sm">Income</h3>
                <h4 className="text-sm text-[#aaa] // capitalize max-lg:text-xs">{data?.[selectedValue].month} {data?.[selectedValue].year}</h4>
                <h1 className="text-2xl font-semibold text-primary-blue mt-2 // max-xl:text-xl // max-lg:text-lg">${data?.[selectedValue].income}</h1>
              </div>
            </div>

            <div className="flex flex-col w-full p-5 gap-8 bg-white rounded-xl border-2 border-[#f1f1f1] cursor-pointer justify-between // max-xl:p-4 max-xl:gap-7 // max-lg:p-3 max-lg:gap-6">
              <div className="flex flex-row justify-between">
                <img src="/icon/card-send.svg" alt="" className="min-w-8 p-3 rounded-full bg-[#f7f7f7] // max-lg:p-3 max-lg:w-12" />
                <img src="/icon/arrow.svg" alt="" className="w-6 -rotate-90 // max-lg:w-5"/>
              </div>
              <div className="flex flex-col items-start gap-2 // max-lg:gap-1">
                <h3 className="text-base font-semibold text-dark-blue // max-lg:text-sm">Expenses</h3>
                <h4 className="text-sm text-[#aaa] // capitalize max-lg:text-xs">{data?.[selectedValue].month} {data?.[selectedValue].year}</h4>
                <h1 className="text-2xl font-semibold text-primary-blue mt-2 // max-xl:text-xl // max-lg:text-lg">${data?.[selectedValue].expenses}</h1>
              </div>
            </div>


          </div>
        </div>
  )
};

export default AllExpenses;
