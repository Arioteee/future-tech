export const DataStatsFeel = ({ children }) => {
	return (
		<>
			<p className='font-semibold text-[40px] mb-6'>
				300<span className='text-brand'>+</span>
			</p>
			<p className='text-lg text-light-60'>{children}</p>
		</>
	)
}
