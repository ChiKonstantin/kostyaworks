import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainView from './MainView';

export default function Main() {
	return (
		<div className='main'>
			{/* <section className='scroll-spacer-div'>1</section>
			<section className='scroll-spacer-div'>2</section>
			<section className='scroll-spacer-div'>3</section> */}
			<Routes>
				<Route path='/' element={<MainView />} />
			</Routes>
		</div>
	);
}
