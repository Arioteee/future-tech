import { Blogs } from './sections/blogs/Blogs'
import { Futures } from './sections/features/Futures'
import { Hero } from './sections/hero/Hero'
import { Insights } from './sections/Insights/Insights'

export default function Home() {
	return (
		<div>
			<Hero />

			<Futures />

			<Blogs />

			<Insights />
		</div>
	)
}
