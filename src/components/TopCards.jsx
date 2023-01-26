import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$7,7420</p>
                <p className='text-gray-600'>Daily Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-lg text-green-700 font-semibold'> +18%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$7,780,419</p>
                <p className='text-gray-600'>Yearly Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-lg text-green-700 font-semibold'> +12%</span>
            </p>
        </div>
        <div className='flex bg-white w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>200</p>
                <p className='text-gray-600'>Customers</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-lg text-green-700 font-semibold'> +8%</span>
            </p>
        </div>
        </div>
  )
}

export default TopCards