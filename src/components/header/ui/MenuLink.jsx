import { NavLink } from 'react-router'

export const MenuLink = ({ isActive, setActiveTab, tab, to, children }) => {
	return (
		<li
			className={`text-lg leading-[150%] 
                ${
					isActive
						? 'text-absolute-white rounded-10 border-solid border border-dark-20 bg-dark-08 py-3.5 px-6'
						: 'text-light-50'
				}`}
			onClick={() => setActiveTab(tab)}
		>
			<NavLink to={to}>{children}</NavLink>
		</li>
	)
}
