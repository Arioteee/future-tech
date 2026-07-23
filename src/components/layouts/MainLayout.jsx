import { Outlet } from 'react-router'
import { Header } from '../header/Header'

export default function MainLayout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<footer className='bg-gray-100 p-4 text-center text-gray-600'>© 2026 Мой сайт</footer>
		</>
	)
}
