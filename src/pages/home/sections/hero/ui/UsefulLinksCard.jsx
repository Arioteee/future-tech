import { ArrowDiagUp } from '@/components/icons/Icons'
import { iconMap } from '@/components/icons/index'

export const UsefulLinksCard = ({ data, index }) => {
	const IconComponent = iconMap[data.icon]
	const { padding = 'pr-20', border = 'border-r' } = data.styles || {}
	const finalPadding = index === 0 ? 'pl-0 pr-20' : padding
	const finalBorder = index === 2 ? 'border-r-0' : border
	const mqPadding = index !== 0 ? 'max-xxl:px-12' : 'max-xxl:pr-12'

	return (
		<div
			className={`py-12.5 ${finalPadding} ${mqPadding} ${finalBorder} max-midlg:px-0 max-midlg:border-r-0 border-y border-dark-10`}
		>
			<div tabIndex={-1}>{IconComponent && <IconComponent />}</div>

			<div className='flex justify-between items-center my-7.5'>
				<div>
					<p className='mb-1 max-xxl:text-lg text-xl font-medium'>{data.title}</p>
					<p className='max-xxl:text-base text-lg text-light-50'>{data.subtitle}</p>
				</div>

				<div className='bg-brand p-4 rounded-full cursor-pointer' tabIndex={1}>
					<ArrowDiagUp />
				</div>
			</div>

			<p className='max-xxl:text-base text-lg text-light-50'>{data.description}</p>
		</div>
	)
}
