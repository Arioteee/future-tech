export const DataStatsFeel = ({ children }) => {
	return (
		<>
			<p className='font-semibold mb-6 max-xxl:mb-1 text-[40px] max-xxl:text-3xl'>
				300<span className='text-brand'>+</span>
			</p>
			<p className='text-lg max-xxl:text-sm text-light-60'>{children}</p>
		</>
	)
}
