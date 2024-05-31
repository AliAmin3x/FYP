import React from 'react'
import SearchBar from '../../Components/searchbar/SearchBar'
import Layout from '../../Components/layout/Layout'
import LibraryGameCard from '../../Components/LibraryCard/libraryGameCard'

function Library() {
	return (
		<Layout>
			<SearchBar/>
			<div>
        <h1 className="font-roboto mt-5 text-6xl px-52 pt-6 font-bold text-white">Library</h1>
			</div>

			<div>
		<div className=" my-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-56">
			<LibraryGameCard />
			<LibraryGameCard />
			<LibraryGameCard />
			<LibraryGameCard />
			<LibraryGameCard />
			<LibraryGameCard />
			<LibraryGameCard />
			<LibraryGameCard />
		</div>
		</div>
		</Layout>
	)
}

export default Library
