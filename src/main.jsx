import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')

createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
		</Routes>
	</BrowserRouter>,
)
