import React from 'react'
import Layout from '../../Components/layout/Layout'

function AccountSettings() {
    return (
        <Layout>
            <div className='pt-7 px-7 flex'>
                <div className='bg-lightgray w-1/5 h-screen flex justify-center rounded-lg'>
                <ul className='w-full px-2 font-bold'>
                        <li className='bg-buttongray2 w-auto h-24 flex justify-center items-center mt-3 rounded-lg'>
                            <a href="/accountsettings"className='text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out'>
                                Account Settings
                            </a>
                        </li>

                        <li className='bg-buttongray w-auto h-24 flex justify-center items-center mt-3 rounded-lg'>
                            <a href="/paymentmethods" className='text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out'>
                                Payment Methods
                            </a>
                        </li>

                        <li className='bg-buttongray w-auto h-24 flex justify-center items-center mt-3 rounded-lg'>
                            <a href="/passwordsecurity" className='text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out'>
                                Passwords & Security
                            </a>
                        </li>

                        <li className='bg-buttongray w-auto h-24 flex justify-center items-center mt-3 rounded-lg'>
                            <a href="/orderhistory" className='text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out'>
                                Order History
                            </a>
                        </li>

                        <li  className='bg-buttongray w-auto h-24 flex justify-center items-center mt-3 rounded-lg'>
                            <a href="/redeemcode" className='text-white w-full h-full flex justify-center items-center hover:bg-buttongray2 transition duration-300 ease-in-out'>
                                Redeem Code
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex-grow ml-7 bg-lightgray rounded-lg">
                   <h1 className="font-roboto text-5xl px-8 py-10 font-bold text-white">Redeem Code</h1>
                    <div className='px-8 py-10'>
                   <h2 className="font-roboto text-3xl font-bold text-white">Enter Redeem Code</h2>

                   <input
                        type="text"
                        placeholder="Your Redeem Code"
                        className="mt-5 w-1/3 h-20 rounded-lg bg-buttongray2 text-white text-lg text-center placeholder-gray-300"
                        />
                   </div>
                   <div className='px-8 py-4'>
                   <div className='h-10 w-36 bg-cosmicpurple hover:bg-purple2 flex justify-center items-center outline-none rounded-lg font-bold transition duration-300 ease-in-out'>
                    <button className=' px-8 py-10 text-white w-full h-full flex justify-center items-center '>
                        Redeem
                    </button>
                   </div>
                   </div>
                </div>
            </div>
        </Layout>
    )
}

export default AccountSettings
