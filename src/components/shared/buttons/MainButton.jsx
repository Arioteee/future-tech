import { Link } from 'react-router'

export const MainButton = ({
	typeOfBtn,
	nameBtn,
	iconBtn,
	styles,
	tabName,
	activeTab,
	onClick,
}) => {
	const isActive = tabName && activeTab === tabName
	const activeStyles = isActive ? 'bg-dark-10 text-absolutewhite' : ''

	return typeOfBtn === 'link' ? (
		<Link
			className={`flex items-center justify-center gap-2.5 cursor-pointer border border-dark-15 px-5 ${styles}`}
			to={'/'}
		>
			<span className='text-sm md:text-lg text-light-60'>{nameBtn}</span>

			{iconBtn}
		</Link>
	) : (
		<button
			className={`flex items-center justify-center gap-2.5 cursor-pointer border border-dark-15 px-5 ${styles} ${activeStyles}`}
			type='button'
			onClick={onClick}
		>
			<span className='text-sm md:text-lg text-light-60'>{nameBtn}</span>

			{iconBtn}
		</button>
	)
}
