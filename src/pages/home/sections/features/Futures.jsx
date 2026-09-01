import { FutureCard } from './ui/FutureCard'
import { FutureTitle } from './ui/FutureTitle'
import { FutureCardBlock } from './ui/FutureCardBlock'
import { SectionTitle } from '@/components/shared/SectionTitle'

import dataTech from '@/data/dataFuture/dataFuturesTech.json'
import dataReserch from '@/data/dataFuture/dataFutureReserch.json'
import { CustomContainer } from '../../../../components/shared/CustomContainer'

export const Futures = () => {
	return (
		<section>
			<SectionTitle title={'FutureTech Features'} description={'Unlock the Power of'} />

			<div className='relative'>
				<CustomContainer>
					<div className='flex w-full max-xxl:flex-col'>
						<div className='py-38.75 pr-20 w-2/5 max-xxl:pr-0 max-xxl:w-full max-xxl:py-12.5'>
							<FutureTitle data={dataTech[0]} />
						</div>

						<div className='max-xxl:border-y border-dark-15 py-7.5'>
							<FutureCardBlock>
								{dataTech.slice(1).map(data => (
									<FutureCard key={data.id} data={data} />
								))}
							</FutureCardBlock>
						</div>
					</div>

					<div className='flex w-full max-xxl:flex-col'>
						<div className='py-38.75 pr-20 w-2/5 max-xxl:pr-0 max-xxl:w-full max-xxl:py-12.5'>
							<FutureTitle data={dataReserch[0]} />
						</div>

						<div className='max-xxl:border-y border-dark-15 py-7.5'>
							<FutureCardBlock>
								{dataReserch.slice(1).map(data => (
									<FutureCard key={data.id} data={data} />
								))}
							</FutureCardBlock>
						</div>
					</div>
				</CustomContainer>

				<div className='absolute h-full w-px bg-dark-15 top-0 left-[40%] max-xxl:hidden'></div>
				<div className='absolute w-full h-px bg-dark-15 top-1/2 max-xxl:hidden'></div>
			</div>
		</section>
	)
}
