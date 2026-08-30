export const Achivements = ({ data, index }) => {
	const finalPadding = index === 0 ? 'pl-0' : ''
	const finalBorder = index === 2 ? '' : 'border-r'

	return (
		<div
			className={`col-span-4 p-12.5 ${finalPadding} max-sm:p-5 ${finalBorder} border-dark-10`}
		>
			<p className='font-semibold mb-6 max-xxl:mb-1 text-[40px] max-xxl:text-3xl'>
				{data.count}
				<span className='text-brand'>+</span>
			</p>
			<p className='text-lg max-xxl:text-sm text-light-60'>{data.description}</p>
		</div>
	)
}
