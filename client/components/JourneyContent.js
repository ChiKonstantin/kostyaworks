import React, { useState, useEffect } from 'react';
import { IoChevronBackCircle } from 'react-icons/io5';
import { IoChevronForwardCircle } from 'react-icons/io5';
import NavMarker from './NavMarker';
import { journeyData } from '../contentData';
import ContentModule from './ContentModule';

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
					{journeyData.map((journeyData) => {
						return (
							<>
								<ContentModule imageUrl={journeyData.subsections[0].imageUrl} />
								<ContentModule imageUrl={journeyData.subsections[1].imageUrl} />
							</>
						);
					})}
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
					<div className='nav-bar'></div>
					<div className='nav-markers-wrapper'>
						<NavMarker text='SCHOOL' />
						<NavMarker text='COLLEGE' />
						<NavMarker text='JOBS' />
						<NavMarker text='CAREER CHANGE' />
						<NavMarker text='TODAY' />
					</div>
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
