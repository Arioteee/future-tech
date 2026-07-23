import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import MainLayout from './components/layouts/MainLayout.jsx'
import Resources from './pages/resources/Resources.jsx'
import Podcasts from './pages/podcasts/Podcasts.jsx'
import NotFound from './pages/notfound/NotFound.jsx'
import Home from './pages/home/Home.jsx'
import News from './pages/news/News.jsx'

import './index.css'

const root = document.getElementById('root')

createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path='news' element={<News />} />
				<Route path='podcasts' element={<Podcasts />} />
				<Route path='resources' element={<Resources />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>,
)
