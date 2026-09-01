export const SectionTitle = ({ title, description }) => {
	return (
		<div className='bg-dark-10 py-30 border-y border-dark-15 max-xxl:py-20 max-md:py-10'>
			<div className='container-custom'>
				<span className='py-1.5 px-2.5 rounded-sm bg-dark-20 text-xl max-xxl:text-base max-md:py-1 max-md:px-2'>
					{description}
				</span>
				<h2 className='mt-4 text-[58px] leading-[130%] max-xxl:text-[44px] max-xxl:font-medium max-md:text-3xl'>
					{title}
				</h2>
			</div>
		</div>
	)
}
