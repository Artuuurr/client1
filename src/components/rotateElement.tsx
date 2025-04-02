import { FC } from 'react'

interface rotateElementProps {
	name: string
	colorText: string
	transform: string
}

const RotateElement: FC<rotateElementProps> = ({
	name,
	colorText,
	transform,
}) => {
	return (
		<div className='rotateElement'>
			<h2
				style={{ color: colorText, transform: `translateX(-${transform}px)` }}
			>
				{name}
			</h2>
		</div>
	)
}

export default RotateElement
