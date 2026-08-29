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
				<div className='grid grid-cols-12 grid-rows-auto items-start gap-0'>
					<div className='col-span-7 pt-37.5 pb-25 pr-12.5 border border-l-0 border-dark-10'>
						<p className='font-medium text-3xl leading-[120%] text-dark-40'>
							Your Journey to Tomorrow Begins Here
						</p>
						<h1 className='mt-7.5 mb-5 text-[70px] font-medium leading-[120%] font-family-second'>
							Explore the Frontiers of Artificial Intelligence
						</h1>
						<p className='font-normal text-lg text-light-50'>
							Welcome to the epicenter of AI innovation. FutureTech AI News is your
							passport to a world where machines think, learn, and reshape the future.
							Join us on this visionary expedition into the heart of AI.
						</p>
					</div>

					<div
						className='col-start-8 col-span-12 row-span-2 relative overflow-hidden pt-96.25 pb-20 pl-20 pr-13.75
									border border-r-0 border-dark-10'
					>
						<div className='absolute top-0 left-0 -z-10 opacity-80'>
							<img src={Abstract} alt='Abstract image' />
						</div>
						<div className='absolute top-0 left-0 -z-10 w-full h-full bg-dark-08/50'></div>

						<div className='flex w-max border border-dark-15 rounded-full p-2.5 bg-dark-10'>
							<div className='flex -space-x-3'>
								<img src={Tom} className='w-15 h-15 shrink-' aria-hidden />
								<img src={Madison} className='w-15 h-15 shrink-0' aria-hidden />
								<img src={Ashab} className='w-15 h-15 shrink-0' aria-hidden />
								<img src={Mickle} className='w-15 h-15 shrink-0' aria-hidden />
							</div>
						</div>

						<p className='mt-7.5 text-2xl'>Explore 1000+ resources</p>

						<p className='mt-7.5 mb-3.5 font-normal text-light-60'>
							Over 1,000 articles on emerging tech trends and breakthroughs.
						</p>

						<button
							type='button'
							className='flex gap-2.5 items-center border border-dark-15 py-4.5 px-7 rounded-10 text-light-60'
						>
							Explore Resources
							<ArrowUp />
						</button>
					</div>

					<div className='grid grid-cols-12 col-span-7 border-t border-b border-dark-10'>
						<div className='col-span-4 p-12.5 pl-0 border-r border-dark-10'>
							<DataStatsFeel>Resources available</DataStatsFeel>
						</div>
						<div className='col-span-4 p-12.5 border-r border-dark-10'>
							<DataStatsFeel>Total Downloads</DataStatsFeel>
						</div>
						<div className='col-span-4 p-12.5 border-dark-10'>
							<DataStatsFeel>Active Users</DataStatsFeel>
						</div>
					</div>

					<div className='col-span-12 grid grid-cols-3'>
						{dataFutureCard.map((data, index) => (
							<FutureCard key={data.id} data={data} index={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
