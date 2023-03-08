import React, { useState, useEffect } from 'react';
import { IoChevronBackCircle } from 'react-icons/io5';
import { IoChevronForwardCircle } from 'react-icons/io5';
import NavMarker from './NavMarker';

export default function JourneyContent() {
	const pageName = 'journey';
	function arrowScroll(direction) {
		//getting the scroller
		let scroller = document.getElementById(`${pageName}-scroller`);
		let wrapper = document.getElementById(`${pageName}-wrapper`);

		//getting all styles from scroller
		let contentWrapperStyle = document.defaultView.getComputedStyle(wrapper);
		//getting height of scroller and removing px to have a pure number
		let scrollValue = parseInt(contentWrapperStyle.height);
		//applying scrolling to
		if (direction === 'left') {
			scroller.scrollLeft -= scrollValue * 2;
		} else if (direction === 'right') {
			scroller.scrollLeft += scrollValue * 2;
		}
	}

	return (
		<div className='page-content'>
			<div id={pageName + '-scroller'} className='content-scroller'>
				<div id={pageName + '-wrapper'} className='content-wrapper'>
					<div className=''></div>
					<div className='content-module'>
						<img
							className='img-content'
							src='https://media.architecturaldigest.com/photos/56ba787ca254b168296a8fff/master/pass/zaha-hadid-architecture-01.jpg'
						/>
					</div>
					<div className='content-module'>
						<img
							className='img-content'
							src='https://architecturesideas.com/wp-content/uploads/2018/02/modern-architecture-buildings-9.jpg'
						/>
					</div>
					<div className='content-module'>
						<img
							className='img-content'
							src='https://wallpaperaccess.com/full/153244.jpg'
						/>
					</div>
					<div className='content-module'>
						<img src='https://architecturesideas.com/wp-content/uploads/2017/09/5-19.jpg' />
					</div>
					<div className='content-module'>
						<img
							className='img-content'
							src='https://cdn.britannica.com/28/116528-050-1CAC6728/Great-Court-Foster-and-Partners-British-Museum-2000.jpg'
						/>
					</div>
					<div className='content-module'>
						<img
							className='img-content'
							src='https://wallpapercave.com/wp/EPfczsw.jpg'
						/>
					</div>
				</div>
			</div>

			<div className='content-navigation'>
				<div
					className='content-arrow-left'
					onClick={() => {
						arrowScroll('left');
					}}
				>
					<IoChevronBackCircle className='arrow-icon' />
				</div>
				<div className='navigation-visual'>
					<NavMarker text='Station One Hunder' />
					<NavMarker text='Station Two' />
					<NavMarker text='Station Three' />
					<NavMarker text='Station Four' />
					<NavMarker text='Station Five' />
				</div>

				<div
					className='content-arrow-right'
					onClick={() => {
						arrowScroll('right');
					}}
				>
					<IoChevronForwardCircle className='arrow-icon' />
				</div>
			</div>
		</div>
	);
}
