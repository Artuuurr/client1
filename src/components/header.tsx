import { FC } from 'react'
import { INav } from '../types/types'
import './header.css'
import { useEffect, useState } from 'react'
import AuthForm from './authForm'

interface navItemsProps {
	navItems: INav[]
}

const Header: FC<navItemsProps> = ({ navItems }) => {
	const [isNavTransparent, setIsNavTransparent] = useState(true)
	const [isSocsetiTransparent, setIsSocsetiTransparent] = useState(false)
	const [isAuthFormVisible, setIsAuthFormVisible] = useState(false)
	const [isRegister, setIsRegister] = useState(false)
	const [user, setUser] = useState<{ name: string } | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			const homeSection = document.getElementById('home')

			if (homeSection) {
				const bottom = homeSection.getBoundingClientRect().bottom

				setIsNavTransparent(bottom <= 50)

				setIsSocsetiTransparent(bottom < 900)
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		const token = localStorage.getItem('token')
		const name = localStorage.getItem('name')

		if (token && name) {
			setUser({ name })
		}
	}, [])

	const handleOpenAuthForm = (register: boolean) => {
		setIsRegister(register)
		setIsAuthFormVisible(true)
	}

	const handleCloseAuthForm = () => {
		setIsAuthFormVisible(false)
	}

	const handleSuccessAuth = (name: string, token: string) => {
		setUser({ name })
		localStorage.setItem('token', token)
		localStorage.setItem('name', name)
		setIsAuthFormVisible(false)
	}

	const handleLogout = () => {
		setUser(null)
		localStorage.removeItem('token')
		localStorage.removeItem('name')
	}

	return (
		<>
			{isAuthFormVisible && (
				<AuthForm
					isRegister={isRegister}
					onClose={handleCloseAuthForm}
					onSuccess={handleSuccessAuth}
				/>
			)}
			<nav className={isNavTransparent ? '' : 'transparent-bg'}>
				{navItems.map(navItem => (
					<div key={navItem.navId}>
						<a href={navItem.navHref}>{navItem.navName}</a>
					</div>
				))}
				<div className='auth-buttons'>
					{user ? (
						<>
							<span className='user-name'>{user.name}</span>
							<button onClick={handleLogout}>Выйти</button>
						</>
					) : (
						<>
							<button onClick={() => handleOpenAuthForm(false)}>Войти</button>
							<button onClick={() => handleOpenAuthForm(true)}>
								Регистрация
							</button>
						</>
					)}
				</div>
			</nav>

			<div
				className={`en_socseti_bottom ${
					isSocsetiTransparent ? '' : 'transparent-bg'
				}`}
			>
				<a
					href='https://www.youtube.com/channel/UC4ink5TgHMuRmSvJ2N1LOaQ'
					target='_blank'
					title=''
				>
					<img src='../public/img/youtube.svg' alt='' />
				</a>
				<a
					href='https://www.instagram.com/rap_anacondaz/'
					target='_blank'
					title=''
				>
					<img src='../public/img/instagram.svg' alt='' />
				</a>
				<a href='https://vk.com/anacondaz' target='_blank' title=''>
					<img src='../public/img/vk.svg' alt='' />
				</a>
				<a
					href='https://www.facebook.com/rapanacondaz'
					target='_blank'
					title=''
				>
					<img src='../public/img/facebook.svg' alt='' />
				</a>
				<a href='https://twitter.com/rap_anacondaz' target='_blank' title=''>
					<img src='../public/img/twitter.svg' alt='' />
				</a>
			</div>
		</>
	)
}

export default Header
