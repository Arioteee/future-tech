import { useState } from 'react'

import { SectionTitle } from '@/components/shared/SectionTitle'
import { MainButton } from '@/components/shared/buttons/MainButton'
import { ArrowDiagUp } from '@/components/icons/Icons'
import { BlogCard } from './ui/BlogCard'

import dataTabsBlogs from '@/data/dataBlogs/dataTabsBlogs.json'
import dataBlogsCard from '@/data/dataBlogs/dataBlogInfo.json'

import { useWindowWidth } from '@/utils/hooks/screenWidth'

export const Blogs = () => {
	const [activeTab, setActiveTab] = useState('All')
	const screenWidth = useWindowWidth()
	const onToggleTab = tabName => {
		setActiveTab(tabName)
	}

	return (
		<section>
			<SectionTitle
				description={'A Knowledge Treasure Trove'}
				title={"Explore FutureTech's In-Depth Blog Posts"}
				styles={screenWidth <= 1100 && 'flex-col items-start'}
				children={
					<MainButton
						styles={`bg-dark-08 py-5 rounded-xl xxl:px-6 md:px-5 ${screenWidth <= 1100 ? 'w-full mt-7.5' : ''}`}
						typeOfBtn={'link'}
						iconBtn={<ArrowDiagUp className={'h-4.25 w-4.25'} />}
						nameBtn={'View All Blogs'}
					/>
				}
			/>

			<nav
				className='flex justify-around w-full overflow-x-auto py-5 sm:py-12.5 border-y border-dark-15 scrollbar-none'
				aria-label='Blog categories'
			>
				<div className='flex min-w-auto items-center gap-5 px-4'>
					{dataTabsBlogs.map(data => (
						<MainButton
							key={data.id}
							data={data}
							activeTab={activeTab}
							tabName={data.name}
							onClick={() => onToggleTab(data.name)}
							styles={`bg-dark-08 rounded-[7px] text-nowrap py-4.5 w-[151px] md:py-6 md:w-[201px] xxl:py-7.25 2xl:w-[250px] ${activeTab === data.name ? 'bg-dark-10 text-absolutewhite' : ''}`}
							typeOfBtn={'button'}
							nameBtn={data.name}
						/>
					))}
				</div>
			</nav>

			<div className='max-w-[1596px] m-auto'>
				<div className='flex flex-col w-full items-center px-4 2xl:p-0'>
					{dataBlogsCard.map(data => (
						<BlogCard key={data.id} data={data} />
					))}
				</div>
			</div>
		</section>
	)
}
