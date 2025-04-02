// import { useState } from 'react'

// interface Seat {
// 	id: number
// 	x: number
// 	y: number
// 	price: number
// }

// const seatsData: Seat[] = [
// 	// Сектор 1
// 	{ id: 1, x: 10, y: 20, price: 2200 },
// 	{ id: 2, x: 70, y: 20, price: 2200 },
// 	{ id: 3, x: 130, y: 20, price: 2200 },
// 	{ id: 4, x: 190, y: 20, price: 2200 },
// 	{ id: 5, x: 250, y: 20, price: 2200 },
// 	{ id: 6, x: 310, y: 20, price: 2200 },

// 	// Сектор 2
// 	{ id: 7, x: 10, y: 80, price: 2400 },
// 	{ id: 8, x: 70, y: 80, price: 2400 },
// 	{ id: 9, x: 130, y: 80, price: 2400 },
// 	{ id: 10, x: 190, y: 80, price: 2400 },
// 	{ id: 11, x: 250, y: 80, price: 2400 },
// 	{ id: 12, x: 310, y: 80, price: 2400 },

// 	// Сектор 3
// 	{ id: 13, x: 10, y: 140, price: 2500 },
// 	{ id: 14, x: 70, y: 140, price: 2500 },
// 	{ id: 15, x: 130, y: 140, price: 2500 },
// 	{ id: 16, x: 190, y: 140, price: 2500 },
// 	{ id: 17, x: 250, y: 140, price: 2500 },
// 	{ id: 18, x: 310, y: 140, price: 2500 },

// 	// Сектор 4 (VIP)
// 	{ id: 19, x: 10, y: 200, price: 3000 },
// 	{ id: 20, x: 70, y: 200, price: 3000 },
// 	{ id: 21, x: 130, y: 200, price: 3000 },
// 	{ id: 22, x: 190, y: 200, price: 3000 },
// 	{ id: 23, x: 250, y: 200, price: 3000 },
// 	{ id: 24, x: 310, y: 200, price: 3000 },

// 	// Сектор 5 (первые ряды)
// 	{ id: 25, x: 10, y: 260, price: 2700 },
// 	{ id: 26, x: 70, y: 260, price: 2700 },
// 	{ id: 27, x: 130, y: 260, price: 2700 },
// 	{ id: 28, x: 190, y: 260, price: 2700 },
// 	{ id: 29, x: 250, y: 260, price: 2700 },
// 	{ id: 30, x: 310, y: 260, price: 2700 },

// 	// Сектор 6 (первые ряды)
// 	{ id: 31, x: 10, y: 320, price: 2700 },
// 	{ id: 32, x: 70, y: 320, price: 2700 },
// 	{ id: 33, x: 130, y: 320, price: 2700 },
// 	{ id: 34, x: 190, y: 320, price: 2700 },
// 	{ id: 35, x: 250, y: 320, price: 2700 },
// 	{ id: 36, x: 310, y: 320, price: 2700 },
// ]

// export default function TicketBookingWidget() {
// 	const [selectedSeats, setSelectedSeats] = useState([])

// 	const toggleSeat = (seat: Seat) => {
// 		setSelectedSeats(prev =>
// 			prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
// 		)
// 	}

// 	const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0)

// 	return (
// 		<div className='flex flex-col items-center p-4 border rounded-lg shadow-md w-full max-w-lg'>
// 			<h2 className='text-xl font-bold mb-4'>Выберите места</h2>
// 			<svg width='400' height='150' viewBox='0 0 400 400' className='border'>
// 				{seatsData.map(seat => (
// 					<rect
// 						key={seat.id}
// 						x={seat.x}
// 						y={seat.y}
// 						width='50'
// 						height='50'
// 						rx='10'
// 						fill={selectedSeats.includes(seat) ? 'red' : 'green'}
// 						stroke='black'
// 						onClick={() => toggleSeat(seat)}
// 						className='cursor-pointer hover:opacity-80'
// 					/>
// 				))}
// 			</svg>
// 			<div className='mt-4 text-lg font-semibold'>
// 				Общая стоимость: {totalPrice} ₽
// 			</div>
// 			<button disabled={selectedSeats.length === 0}>Купить билеты</button>
// 		</div>
// 	)
// }
