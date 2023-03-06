import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainView from './MainView';
import PageContent from './PageContent';

export default function Main() {
	return (
		<div className='main'>
			<Routes>
				<Route path='/' element={<MainView />} />
				{/* <Route path='/' element={<PageContent />} /> */}
			</Routes>
		</div>
	);
}
