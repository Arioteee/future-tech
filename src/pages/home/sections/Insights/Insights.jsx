import { useWindowWidth } from '@/utils/hooks/screenWidth'

import { SectionTitle } from '@/components/shared/SectionTitle'
import { MainButton } from '@/components/shared/buttons/MainButton'
import { DescriptionArea } from './ui/DescriptionArea'
import { EyeIcon } from '@/components/icons/Icons'
import { ArrowDiagUp, DoubleArc } from '@/components/icons/Icons'
import { IsometricCube } from '@/components/icons/Icons'

import VarietyTopicsImage from '@/assets/png/VarietyTopicsImage.png'
import TopicsCoverageImage from '@/assets/png/TopicsCoverageImage.png'
import Ashab from '@/assets/png/ashab.png'
import Madison from '@/assets/png/madison.png'
import Tom from '@/assets/png/tom.png'
import Mickle from '@/assets/png/mickle.png'

export const Insights = () => {
	const screenWidth = useWindowWidth()

	return (
		<section>
			<SectionTitle
				description={'Your Gateway to In-Depth Information'}
				title={"Unlock Valuable Knowledge with FutureTech's Resources"}
				styles={screenWidth <= 1100 && 'flex-col items-start'}
				children={
					<MainButton
						styles={`bg-dark-08 py-5 rounded-xl xxl:px-6 md:px-5 text-nowrap ${screenWidth <= 1100 ? 'w-full mt-7.5' : ''}`}
						typeOfBtn={'link'}
						iconBtn={<ArrowDiagUp className={'h-4.25 w-4.25'} />}
						nameBtn={'View All Resources'}
					/>
				}
			/>

			<div className='relative'>
				<div className='container-custom'>
					<div className='py-10 xl:flex xl:p-0'>
						<div className='border-b border-dark-15 pb-10 xl:border-none xl:pr-15 xl:py-37.5'>
							<DoubleArc styles={'w-9.5 h-10 xl:w-11.25 xl:h-12 2xl:w-15 2xl:h-16'} />

							<div className='my-6'>
								<p className='mb-1 text-2xl font-family-second font-semibold xl:mb-2.5 xl:text-3xl 2xl:text-[40px]'>
									Ebooks
								</p>

								<p className='text-light-60 text-base 2xl:text-xl'>
									Explore our collection of ebooks covering a wide spectrum of
									future technology topics.
								</p>
							</div>

							<MainButton
								styles={`bg-dark-10 py-5 mb-5 rounded-xl md:px-5 xl:mt-12.5 xl:mb-15 xxl:px-6 text-nowrap ${screenWidth <= 1100 ? 'w-full mt-7.5' : ''}`}
								typeOfBtn={'link'}
								iconBtn={<ArrowDiagUp className={'h-4.25 w-4.25'} />}
								nameBtn={'Download Ebooks Now'}
							/>

							<DescriptionArea
								title={'Downloaded By'}
								description={'10k+ Users'}
								style={'xl:max-w-108.25'}
							>
								<div className='flex items-center -space-x-3 bg-dark-08 rounded-xl p-2'>
									<img src={Tom} className='w-13 h-13' />
									<img src={Ashab} className='w-13 h-13' />
									<img src={Mickle} className='w-13 h-13' />
									<img src={Madison} className='w-13 h-13' />
								</div>
							</DescriptionArea>
						</div>

						<div className='py-10 relative xl:pl-15 xl:py-15'>
							<div className='xl:flex xl:gap-16 xl:items-center'>
								<p className='mb-1 text-lg font-semibold lg:text-xl xl:text-nowrap 2xl:text-2xl'>
									Variety of Topics
								</p>

								<p className='text-light-60 text-base 2xl:text-lg'>
									Topics include AI in education (25%), renewable energy (20%),
									healthcare (15%), space exploration (25%), and biotechnology
									(15%).
								</p>
							</div>

							<img
								src={VarietyTopicsImage}
								alt='Variety Topics Image'
								className='py-6 w-full'
							/>

							<div className='[&>*:not(:last-child)]:mb-4 sm:[&>*:not(:last-child)]:mb-0 sm:grid sm:grid-cols-8 sm:gap-x-4 sm:gap-y-6'>
								<DescriptionArea
									gridStyle={'col-span-3'}
									title={'Total Ebooks'}
									description={'Over 100 ebooks'}
								/>

								<DescriptionArea
									gridStyle={'col-start-4 col-span-8'}
									title={'Download Formats'}
									description={'PDF format for access.'}
									children={
										<MainButton
											styles={`bg-dark-08 py-3.5 rounded-xl xxl:px-6 px-5 text-nowrap ${screenWidth <= 1100 ? '' : ''}`}
											typeOfBtn={'button'}
											iconBtn={<EyeIcon styles={'w-5 h-5'} />}
											nameBtn={'Preview'}
										/>
									}
								/>

								<DescriptionArea
									gridStyle={'col-span-11'}
									title={'Average Author Expertise'}
									description={
										'Ebooks are authored by renowned experts with an average of 15 years of experience'
									}
								/>
							</div>

							<div className='absolute z-10 h-px w-svw -left-4 bottom-0 bg-dark-15 xl:hidden'></div>
						</div>
					</div>

					<div className='py-10 xl:flex xl:p-0'>
						<div className='border-b border-dark-15 pb-10 xl:border-none xl:pr-15 xl:py-37.5'>
							<IsometricCube
								styles={'w-9.5 h-10 xl:w-11.25 xl:h-12 2xl:w-15 2xl:h-16'}
							/>

							<div className='my-6'>
								<p className='mb-1 text-2xl font-family-second font-semibold xl:mb-2.5 xl:text-3xl 2xl:text-[40px]'>
									Whitepapers
								</p>

								<p className='text-light-60 text-base 2xl:text-xl'>
									Dive into comprehensive reports and analyses with our collection
									of whitepapers.
								</p>
							</div>

							<MainButton
								styles={`bg-dark-10 py-5 mb-5 rounded-xl md:px-5 xl:mt-12.5 xl:mb-15 xxl:px-6 text-nowrap ${screenWidth <= 1100 ? 'w-full mt-7.5' : ''}`}
								typeOfBtn={'link'}
								iconBtn={<ArrowDiagUp className={'h-4.25 w-4.25'} />}
								nameBtn={'Download Ebooks Now'}
							/>

							<DescriptionArea
								title={'Downloaded By'}
								description={'10k+ Users'}
								style={'xl:max-w-108.25'}
							>
								<div className='flex items-center -space-x-3 bg-dark-08 rounded-xl p-2'>
									<img src={Tom} className='w-13 h-13' />
									<img src={Ashab} className='w-13 h-13' />
									<img src={Mickle} className='w-13 h-13' />
									<img src={Madison} className='w-13 h-13' />
								</div>
							</DescriptionArea>
						</div>

						<div className='py-10 relative xl:pl-15 xl:py-15'>
							<div className='xl:flex xl:gap-16 xl:items-center'>
								<p className='mb-1 text-lg font-semibold lg:text-xl xl:text-nowrap 2xl:text-2xl'>
									Variety of Topics
								</p>

								<p className='text-light-60 text-base 2xl:text-lg'>
									Topics include AI in education (25%), renewable energy (20%),
									healthcare (15%), space exploration (25%), and biotechnology
									(15%).
								</p>
							</div>

							<img
								src={TopicsCoverageImage}
								alt='Variety Topics Image'
								className='py-6 w-full'
							/>

							<div className='[&>*:not(:last-child)]:mb-4 sm:[&>*:not(:last-child)]:mb-0 sm:grid sm:grid-cols-8 sm:gap-x-4 sm:gap-y-6'>
								<DescriptionArea
									gridStyle={'col-span-3'}
									title={'Total Ebooks'}
									description={'Over 100 ebooks'}
								/>

								<DescriptionArea
									gridStyle={'col-start-4 col-span-8'}
									title={'Download Formats'}
									description={'PDF format for access.'}
									children={
										<MainButton
											styles={`bg-dark-08 py-3.5 rounded-xl xxl:px-6 px-5 text-nowrap ${screenWidth <= 1100 ? '' : ''}`}
											typeOfBtn={'button'}
											iconBtn={<EyeIcon styles={'w-5 h-5'} />}
											nameBtn={'Preview'}
										/>
									}
								/>

								<DescriptionArea
									gridStyle={'col-span-11'}
									title={'Average Author Expertise'}
									description={
										'Ebooks are authored by renowned experts with an average of 15 years of experience'
									}
								/>
							</div>

							<div className='absolute z-10 h-px w-svw -left-4 bottom-0 bg-dark-15 xl:hidden'></div>
						</div>
					</div>
				</div>

				<div className='xl:absolute xl:left-0 xl:top-[52%] w-full h-px bg-dark-15'></div>
			</div>
		</section>
	)
}
