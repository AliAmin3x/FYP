import React from 'react'
import SearchBar from '../../Components/searchbar/SearchBar'
import Layout from '../../Components/layout/Layout'
import LibraryGameCard from '../../Components/LibraryCard/libraryGameCard'
import EcommerceCard from '../../Components/ecommerceCard/EcommerceCard'

function Favourites() {
	return (
		<Layout>
			<SearchBar/>
			<div>
        <h1 className="font-roboto mt-5 text-6xl px-52 pt-6 font-bold text-white">Favourites</h1>
			</div>

			<div>
		<div className=" my-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-56">
			<EcommerceCard />
			<EcommerceCard />
			<EcommerceCard />
			<EcommerceCard />
			<EcommerceCard />
			<EcommerceCard />
			<EcommerceCard />
			<EcommerceCard />
		</div>
		</div>
		</Layout>
	)
}

export default Favourites
