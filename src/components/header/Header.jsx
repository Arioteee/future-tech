import { useState } from 'react'

import { MenuLink } from './ui/MenuLink'
import { BurgerIcon } from '../icons/BurgerIcon'
import { Logotype } from '../../assets/svg/Logotype'

export const Header = () => {
	const [activeTab, setActiveTab] = useState('home')

	const menuItems = [
		{ id: 'home', label: 'Home', link: '/' },
		{ id: 'news', label: 'News', link: '/news' },
		{ id: 'podcasts', label: 'Podcasts', link: '/podcasts' },
		{ id: 'resources', label: 'Resources', link: '/resources' },
	]

	return (
		<header className='bg-dark-10 pt-6.5 pb-6.5'>
			<div className='container-custom'>
				<div className='flex items-center justify-between'>
					<Logotype />

					<nav className='max-lg:hidden'>
						<ul className='flex items-center gap-10'>
							{menuItems.map(item => (
								<MenuLink
									key={item.id}
									isActive={activeTab === item.id}
									setActiveTab={setActiveTab}
									tab={item.id}
									to={item.link}
								>
									{item.label}
								</MenuLink>
							))}
						</ul>
					</nav>

					<div className='flex items-center gap-10'>
						<button
							type='button'
							className='
							max-md:hidden
							rounded-10 px-5 py-3.5 bg-brand
                        	font-medium text-lg leading-[150%] text-dark-08 cursor-pointer'
						>
							Contact Us
						</button>

						<button type='button' className='lg:hidden cursor-pointer'>
							<BurgerIcon />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
