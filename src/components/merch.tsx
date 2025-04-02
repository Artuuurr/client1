import RotateElement from './rotateElement'

const Merch = () => {
	return (
		<div className='wrapper'>
			<RotateElement name='Мерч' colorText='white' transform='280' />
			<div className='merchInfo'>
				<h2>Офи­ци­аль­ный магазин</h2>
				<a href='https://bit.ly/2WRN8Rx' target='_blank'>
					Прицениться
				</a>
			</div>
		</div>
	)
}

export default Merch
