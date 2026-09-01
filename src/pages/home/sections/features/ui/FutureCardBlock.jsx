export const FutureCardBlock = ({ children }) => {
	return (
		<div className='grid grid-cols-2 grid-rows-2 gap-7.5 p-20 max-md:grid-rows-4 max-md:grid-cols-1 max-xxl:p-0 max-xxl:gap-5 max-md:gap-2.5 max-xxl:px-4'>
			{children}
		</div>
	)
}
