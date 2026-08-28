import { ArrowDiagUp } from '../../../../../components/icons/Icons'
import { iconMap } from '../../../../../components/icons/index'

export const FutureCard = ({ data, index }) => {
	const IconComponent = iconMap[data.icon]
	const { padding = 'pr-20', border = 'border-r' } = data.styles || {}
	const finalPadding = index === 0 ? 'pr-20' : padding

	return (
		<div className={`py-12.5 ${finalPadding} ${border} border-y border-dark-10`}>
			<div tabIndex={0}>{IconComponent && <IconComponent />}</div>

			<div className='flex justify-between items-center my-7.5'>
				<div className=''>
					<p className='mb-1 text-xl font-medium'>{data.title}</p>
					<p className='text-lg text-light-50'>{data.subtitle}</p>
				</div>

				<div className='bg-brand p-4 rounded-full cursor-pointer' tabIndex={0}>
					<ArrowDiagUp />
				</div>
			</div>

			<p className='text-lg text-light-50'>{data.description}</p>
		</div>
	)
}
