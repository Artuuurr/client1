import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './page/homePage.tsx'
import AlbumBio from './page/albumBio.tsx'
import ConcertsPage from './page/concertsPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/concerts' element={<ConcertsPage />} />
				<Route path='/album-bio' element={<AlbumBio />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
