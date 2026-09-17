export const DescriptionArea = ({ children, title, description, gridStyle }) => {
	return (
		<div className={`${gridStyle}`}>
			<div className='flex items-center justify-between py-5 px-7.5 bg-dark-10 rounded-lg border border-dark-15'>
				<div className='flex flex-col gap-0.5'>
					<span className='text-light-60 text-sm lg:text-base xl:text-lg'>{title}</span>

					<span className='text-base font-semibold lg:text-lg xl:text-xl'>
						{description}
					</span>
				</div>

				{children}
			</div>
		</div>
	)
}
