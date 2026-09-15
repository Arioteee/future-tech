import { BlogButton } from '@/components/shared/buttons/BlogButton'
import { MainButton } from '@/components/shared/buttons/MainButton'
import { ArrowDiagUp } from '@/components/icons/Icons'

import { useWindowWidth } from '@/utils/hooks/screenWidth.js'

export const BlogCard = ({ data }) => {
	const screenWidth = useWindowWidth()

	return (
		<article
			className='w-full py-10 flex flex-col justify-between xxl:gap-10 2xl:gap-23.5 border-b border-dark-15 xl:flex-row lg:py-15'
			tabIndex={0}
			aria-labelledby={`${data.blogTitle} blog`}
		>
			<div className={screenWidth < 1280 ? 'flex justify-between gap-7' : 'w-70 shrink-0'}>
				<div className='flex items-center gap-2'>
					<img src={data.avatar} alt={data.authorName} />

					<div className='flex flex-col'>
						<span className='text-lg font-semibold'>{data.authorName}</span>

						<span className='text-sm text-light-60'>{data.themeBlog}</span>
					</div>
				</div>

				<MainButton
					styles={`bg-dark-08 py-3.5 rounded-xl xxl:px-6 md:px-5 ${screenWidth < 1280 ? 'block' : 'hidden'}`}
					typeOfBtn={'link'}
					iconBtn={<ArrowDiagUp className={'h-4.25 w-4.25'} />}
					nameBtn={'View Blog'}
				/>
			</div>

			<div className='mt-7.5 xl:mt-0 flex-1 min-w-0'>
				<span className='text-light-60 text-base font-semibold'>{data.datePostBlog}</span>

				<div className='my-5'>
					<p className='mb-1 text-lg font-semibold'>{data.blogTitle}</p>

					<p className='text-light-60 text-base'>{data.blogDescrition}</p>
				</div>

				<div className='flex items-center gap-2'>
					<BlogButton nameBtn={'like'} />
					<BlogButton nameBtn={'comment'} />
					<BlogButton nameBtn={'share'} />
				</div>
			</div>

			<div className='shrink-0'>
				<MainButton
					styles={`bg-dark-08 py-3.5 rounded-xl xxl:px-6 md:px-5 ${screenWidth >= 1280 ? 'block' : 'hidden'}`}
					typeOfBtn={'link'}
					iconBtn={<ArrowDiagUp className={'h-4.25 w-4.25'} />}
					nameBtn={'View Blog'}
				/>
			</div>
		</article>
	)
}
