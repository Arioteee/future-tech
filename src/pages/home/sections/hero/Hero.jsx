import { DataStatsFeel } from './ui/DataStatsFeel'
import { FutureCard } from './ui/FutureCard'

import { ArrowUp } from '@/components/icons/Icons'

import dataFutureCard from '@/data/heroData.json'

import Abstract from '@/assets/png/abstract.png'
import Tom from '@/assets/png/tom.png'
import Madison from '@/assets/png/madison.png'
import Ashab from '@/assets/png/ashab.png'
import Mickle from '@/assets/png/mickle.png'

export const Hero = () => {
	return (
		<section>
			<div className='container-custom'>
				<div className='grid grid-cols-12 max-midlg:grid-cols-1 items-start gap-0'>
					<div className='col-span-7 max-midlg:col-span-12 h-auto pt-37.5 pb-25 pr-12.5 max-sm:pr-0 max-xxl:py-25 max-midlg:pt-10 max-midlg:pb-7 max-midlg:border-0 border border-l-0 border-dark-10 order-1'>
						<p className='font-medium max-xxl:text-[22px] text-3xl leading-[120%] text-dark-40'>
							Your Journey to Tomorrow Begins Here
						</p>
						<h1 className='mt-7.5 mb-5 max-sm:text-3xl max-midlg:mt-3 max-midlg:mb-2 max-xxl:text-5xl text-[70px] font-medium leading-[120%] font-family-second'>
							Explore the Frontiers of Artificial Intelligence
						</h1>
						<p className='font-normal max-xxl:text-base text-lg text-light-50'>
							Welcome to the epicenter of AI innovation. FutureTech AI News is your
							passport to a world where machines think, learn, and reshape the future.
							Join us on this visionary expedition into the heart of AI.
						</p>
					</div>

					<div
						className='col-start-8 col-span-12 row-span-2 max-midlg:col-start-1 max-midlg:row-span-2 max-midlg:-ml-8 h-full relative 
                     pt-96.25 pb-20 pl-20 pr-13.75 max-sm:pt-25 max-sm:pb-10 max-sm:pr-10 max-xxl:pt-75 max-xxl:pl-12 max-xxl:pb-12 max-xxl:pr-0 
                     border border-r-0 border-dark-10 overflow-hidden
                     order-2 max-midlg:order-3'
					>
						<div className='absolute top-0 left-0 -z-10 opacity-80' tabIndex={0}>
							<img src={Abstract} alt='Abstract image' />
						</div>

						<div className='absolute top-0 left-0 -z-10 w-full h-full bg-dark-08/80'></div>

						<div className='flex w-max border border-dark-15 rounded-full max-xxl:p-2 p-2.5 bg-dark-10'>
							<div className='flex -space-x-3'>
								<img
									src={Tom}
									className='w-15 h-15 max-xxl:(w-12 h-15) shrink-0'
									aria-hidden
								/>
								<img
									src={Madison}
									className='w-15 h-15 max-xxl:(w-12 h-15) shrink-0'
									aria-hidden
								/>
								<img
									src={Ashab}
									className='w-15 h-15 max-xxl:(w-12 h-15) shrink-0'
									aria-hidden
								/>
								<img
									src={Mickle}
									className='w-15 h-15 max-xxl:(w-12 h-15) shrink-0'
									aria-hidden
								/>
							</div>
						</div>

						<p className='max-xxl:mt-5 mt-7.5 max-xxl:text-xl text-2xl'>
							Explore 1000+ resources
						</p>

						<p className='max-xxl:mt-1 max-xxl:mb-4 mt-7.5 mb-3.5 font-normal text-light-60'>
							Over 1,000 articles on emerging tech trends and breakthroughs.
						</p>

						<button
							type='button'
							className='flex justify-center gap-2.5 items-center border border-dark-15 max-sm:w-full  max-xxl:py-4 max-xxl:px-4 py-4.5 px-7 rounded-10 text-light-60'
						>
							Explore Resources
							<ArrowUp />
						</button>
					</div>

					<div className='grid grid-cols-12 col-span-7 max-midlg:grid-span-12 border-t border-b border-dark-10 order-3 max-midlg:order-2'>
						<div className='col-span-4 p-12.5 pl-0 max-sm:p-5 max-sm:pl-0 border-r border-dark-10'>
							<DataStatsFeel>Resources available</DataStatsFeel>
						</div>
						<div className='col-span-4 p-12.5  max-sm:p-5 border-r border-dark-10'>
							<DataStatsFeel>Total Downloads</DataStatsFeel>
						</div>
						<div className='col-span-4 p-12.5 max-sm:p-5'>
							<DataStatsFeel>Active Users</DataStatsFeel>
						</div>
					</div>

					<div className='grid col-span-12 grid-cols-3 max-midlg:grid-cols-1 order-4'>
						{dataFutureCard.map((data, index) => (
							<FutureCard key={data.id} data={data} index={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
