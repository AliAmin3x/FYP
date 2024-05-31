import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function Layout({children}) {
	return (
		<div>
			<Navbar/>
			<div className="content">
				{children}
			</div>
			<div className=" pt-12">
				<Footer/>
			</div>
			
		</div>
	)
}
