import { Blogs } from './sections/blogs/Blogs'
import { Futures } from './sections/features/Futures'
import { Hero } from './sections/hero/Hero'

export default function Home() {
	return (
		<div>
			<Hero />

			<Futures />

			<Blogs />
		</div>
	)
}
