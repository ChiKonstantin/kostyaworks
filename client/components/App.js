import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainView from './MainView';

export default function Main() {
	return (
		<div className='main'>
			<Routes>
				<Route path='/' element={<MainView />} />
			</Routes>
		</div>
	);
}
