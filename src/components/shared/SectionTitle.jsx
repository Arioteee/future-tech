import { CustomContainer } from '@/components/shared/CustomContainer'

export const SectionTitle = ({ title, description, styles, children }) => {
	return (
		<div className='bg-dark-10 py-30 border-y border-dark-15 max-xxl:py-20 max-md:py-10'>
			<CustomContainer>
				<div className={`flex items-center justify-between ${styles}`}>
					<div>
						<span className='rounded-sm bg-dark-20 py-1 px-2 text-xs sm:text-sm md:py-1.5 md:px-2.5 md:text-base lg:text-lg xl:text-xl'>
							{description}
						</span>

						<h2 className='font-family-second mt-4 leading-[130%] text-2xl md:text-3xl lg:text-[44px] 2xl:text-[58px] font-medium text-wrap'>
							{title}
						</h2>
					</div>

					{children}
				</div>
			</CustomContainer>
		</div>
	)
}
