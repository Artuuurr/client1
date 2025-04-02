import React from 'react'
import { concerts } from '../components/conserts'
import { Link } from 'react-router-dom'
import TicketBookingWidget from '../components/buyTicet'

const ConcertsPage = () => {
	return (
		<>
			<div className='concertTitle'>
				<h1>График концертов</h1>
				<div>
					<button className='concert-button'>
						<Link style={{ textDecoration: 'none' }} to='/'>
							Главная
						</Link>
					</button>
				</div>
			</div>
			<div className='allConcerts'>
				<ul className='concert-list'>
					{concerts.map(concert => (
						<li key={concert.id} className='flex concert-item'>
							<div className='concert-grid'>
								<p className='concert-date'>
									{concert.date.toLocaleDateString()}
								</p>
								<p className='concert-city'>{concert.city}</p>
								<p className='concert-place'>{concert.place}</p>

								<button className='concert-button'>Купить билет</button>
							</div>
						</li>
					))}
				</ul>
			</div>
			<TicketBookingWidget />
		</>
	)
}

export default ConcertsPage
