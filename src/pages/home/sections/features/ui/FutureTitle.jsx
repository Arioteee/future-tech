import { iconMapFuture } from '@/components/icons/index.js'

export const FutureTitle = ({ data }) => {
	const IconComponent = iconMapFuture[data.icon] || iconMapFuture[data.icon?.toLowerCase()]

	return (
		<>
			{IconComponent && <IconComponent />}

			<p className='mb-4 mt-12.5 text-[40px] font-semibold text-nowrap max-xxl:text-[30px] max-xxl:mt-10 max-md:text-2xl max-md:mt-5'>
				{data.title}
			</p>

			<p className='text-lg text-light-60 max-xxl:text-base max-md:text-sm'>
				{data.description}
			</p>
		</>
	)
}
