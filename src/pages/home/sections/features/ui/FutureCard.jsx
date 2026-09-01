export const FutureCard = ({ data }) => {
	return (
		<article className='p-10 border border-dark-15 bg-dark-10 rounded-xl max-sm:p-6'>
			<p className='text-2xl font-medium max-xxl:text-xl'>{data.titleCard}</p>

			<p className='mt-5 text-lg font-medium text-light-60 max-xxl:text-base max-xxl:mt-4 max-md:text-sm max-md:mt-1'>
				{data.descriptionCard}
			</p>
		</article>
	)
}
