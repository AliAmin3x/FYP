import React from 'react'
import Layout from '../../Components/layout/Layout'

function AccountSettings() {
    const handleButtonClick = (buttonName) => {
        console.log(`Button ${buttonName} clicked`);
        // Add your button click logic here
    };

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
                    {/* Add content for the container here */}
                </div>
            </div>
        </Layout>
    )
}

export default AccountSettings
