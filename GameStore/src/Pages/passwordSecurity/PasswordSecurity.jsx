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
                   <h1 className="font-roboto text-5xl px-8 py-10 font-bold text-white">Passwords & Security</h1>
                    <div className='px-8 pt-10'>
                   <h2 className="font-roboto text-3xl font-bold text-white">Change Password</h2>
                   <input
                        type="text"
                        placeholder="Enter Your Password"
                        className="mt-5 w-1/3 h-20 rounded-lg focus: outline-none bg-buttongray2 text-white text-lg text-center placeholder-gray-300"
                        />
                   </div>
                   <div className='px-8'>
                   <input
                        type="text"
                        placeholder="Enter new Password"
                        className="mt-5 w-1/3 h-20 rounded-lg bg-buttongray2 focus: outline-none text-white text-lg text-center placeholder-gray-300"
                        />
                   </div>
                   <div className='px-8 '>
                   <input
                        type="text"
                        placeholder="Confirm new Password"
                        className="mt-5 w-1/3 h-20 rounded-lg bg-buttongray2 focus: outline-none text-white text-lg text-center placeholder-gray-300"
                        />
                   </div>
                   <div className='px-8 py-10 flex justify- font-bold font-roboto'>
                        <button className='text-black  bg-white h-10 w-40 flex justify-center items-center rounded-lg mr-40'>
                            Forgot Password?
                        </button>
                        <button className='text-white bg-cosmicpurple h-10 w-36 flex justify-center items-center rounded-lg'>
                            Confirm
                        </button>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default AccountSettings
