import React from 'react'
import Dnavbar from '../developerNavbar/Dnavbar'
import Footer from '../../../Components/footer/Footer'

export default function Dlayout({children}) {
	return (
		<div>
			<Dnavbar/>
			<div className="content">
				{children}
			</div>
			<div className=" pt-12">
			<Footer/>
			</div>
			
		</div>
	)
}
