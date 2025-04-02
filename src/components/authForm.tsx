import { useState } from 'react'

interface AuthFormProps {
	isRegister: boolean
	onClose: () => void
	onSuccess: (name: string, token: string) => void
}

export default function AuthForm({
	isRegister: initialRegister,
	onClose,
	onSuccess,
}: AuthFormProps) {
	const [isRegister, setIsRegister] = useState(initialRegister)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		setError('')

		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
		if (!emailRegex.test(email)) {
			setError('Некорректный email')
			return
		}

		// Если регистрация
		if (isRegister) {
			// Валидация пароля (не менее 6 символов, хотя бы одна цифра, одна заглавная буква, один специальный символ)
			const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/
			if (!passwordRegex.test(password)) {
				setError(
					'Пароль должен содержать хотя бы одну заглавную букву, цифру и специальный символ'
				)
				return
			}
			if (!name || name.trim() === '') {
				setError('Введите имя')
				return
			}

			// Проверка на совпадение паролей
			if (password !== confirmPassword) {
				setError('Пароли не совпадают')
				return
			}

			try {
				const response = await fetch('http://localhost:3001/api/register', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ name, email, password }),
				})

				if (!response.ok) {
					const errorData = await response.json()
					setError(errorData.message) // Показываем ошибку, если email уже используется
					return
				}

				alert('Регистрация успешна!')
				onClose()
				const data = await response.json()
				onSuccess(name, data.token)
			} catch (err) {
				setError(err.message)
			}
		} else {
			// Авторизация
			try {
				const response = await fetch('http://localhost:3001/api/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email, password }),
				})

				if (!response.ok) {
					throw new Error('Ошибка входа')
				}
				const data = await response.json()
				onClose()
				alert('Вход выполнен успешно!')
				onSuccess(data.name, data.token)
			} catch (err) {
				setError(err.message)
			}
		}
	}

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<div className='modal-overlay' onClick={handleOverlayClick}>
			<div className='modal'>
				<form onSubmit={handleSubmit} className='form'>
					<h2 className='title'>{isRegister ? 'Регистрация' : 'Вход'}</h2>

					{error && <p className='error'>{error}</p>}

					{isRegister && (
						<input
							type='text'
							value={name}
							onChange={e => setName(e.target.value)}
							placeholder='Имя'
							className='input'
						/>
					)}

					<input
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='Email'
						className='input'
					/>

					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='Пароль'
						className='input'
					/>

					{isRegister && (
						<input
							type='password'
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
							placeholder='Повторите пароль'
							className='input'
						/>
					)}

					<button type='submit' className='submit-btn'>
						{isRegister ? 'Зарегистрироваться' : 'Войти'}
					</button>

					<p className='switch-text'>
						{isRegister ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}
						<button
							type='button'
							onClick={() => setIsRegister(!isRegister)}
							className='switch-btn'
						>
							{isRegister ? 'Войти' : 'Зарегистрироваться'}
						</button>
					</p>
				</form>
			</div>
		</div>
	)
}
