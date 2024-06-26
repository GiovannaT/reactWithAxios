import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Personagem from './components/Personagem.tsx';

const router = createBrowserRouter([
	{
		path: '/reactWithAxios',
		element: <App />,
	},
	{
		path: '/personagem',
		element: <Personagem />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

