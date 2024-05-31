import React from 'react'
import Layout from '../../Components/layout/Layout'

function AccountSettings() {
    return (
        <Layout>
            <div className='pt-7 px-7 flex'>
                {/* Left side: Button bar */}
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
                   <h1 className="font-roboto text-5xl px-8 py-10 font-bold text-white">Account Settings</h1>

                   <h2 className="font-roboto text-3xl px-8 py-1 font-bold text-white">Account Information</h2>

                   <div></div>

                </div>
            </div>
        </Layout>
    )
}

export default AccountSettings
