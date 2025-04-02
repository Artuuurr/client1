import 'react-datepicker/dist/react-datepicker.css'
import './conserts.css'
import RotateElement from './rotateElement'
import { Link } from 'react-router-dom'

export const concerts = [
	{
		id: 1,
		city: 'Подольск',
		place: 'ЛЕДОВЫЙ ДВОРЕЦ ВИТЯЗЬ',
		date: new Date(2025, 3, 19),
		href: '',
	},
	{
		id: 2,
		city: 'Мытищи',
		place: 'АРЕНА МЫТИЩИ',
		date: new Date(2025, 3, 26),
		href: '',
	},
	{
		id: 3,
		city: 'Минск',
		place: 'ЧИЖОВКА-АРЕНА',
		date: new Date(2025, 4, 3),
		href: '',
	},
	{
		id: 4,
		city: 'Пермь',
		place: 'УДС МОЛОТ',
		date: new Date(2025, 4, 6),
		href: '',
	},
	{
		id: 5,
		city: 'Екатеренбург',
		place: 'МТС LIVE ХОЛЛ',
		date: new Date(2025, 4, 7),
		href: '',
	},
	{
		id: 6,
		city: 'Челябинск',
		place: 'ДС Юность',
		date: new Date(2025, 4, 8),
		href: '',
	},
	{
		id: 7,
		city: 'Сургут',
		place: 'ЛЕДОВЫЙ ДВОРЕЦ СПОРТА',
		date: new Date(2025, 4, 10),
		href: '',
	},
	{
		id: 8,
		city: 'Тюмень',
		place: 'СК ЦЕНТРАЛЬНЫЙ',
		date: new Date(2025, 4, 12),
		href: '',
	},
	{
		id: 9,
		city: 'Ереван',
		place: 'СКК им. Карена демирчяна',
		date: new Date(2025, 4, 16),
		href: '',
	},
	{
		id: 10,
		city: 'Воронеж',
		place: 'СК ЮБИЛЕЙНЫЙ',
		date: new Date(2025, 4, 17),
		href: '',
	},
	{
		id: 11,
		city: 'Саратов',
		place: 'ЛДС КРИСТАЛЛ',
		date: new Date(2025, 4, 23),
		href: '',
	},
	{
		id: 12,
		city: 'Саранск',
		place: 'ОГАРËВ АРЕНА',
		date: new Date(2025, 4, 24),
		href: '',
	},
	{
		id: 13,
		city: 'Самара',
		place: 'ДС ИМ. В.С. Высоцкого',
		date: new Date(2025, 4, 25),
		href: '',
	},
	{
		id: 14,
		city: 'Уфа',
		place: 'УФА-АРЕНА',
		date: new Date(2025, 4, 27),
		href: '',
	},
]

const Conserts = () => {
	return (
		<div className='wrapper'>
			<RotateElement name='КОНЦЕРТЫ' colorText='black' transform='520' />
			<div className='poster'>
				<div>
					<h3>График концертов</h3>
				</div>
				<div>
					<ul className='concert-list'>
						{concerts.slice(0, 3).map(concert => (
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
				<div>
					<button className='concert-button'>
						<Link style={{ textDecoration: 'none' }} to='/concerts'>
							Подробнее
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Conserts
