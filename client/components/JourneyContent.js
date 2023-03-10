import React, { useState, useEffect } from 'react';
import { IoChevronBackCircle } from 'react-icons/io5';
import { IoChevronForwardCircle } from 'react-icons/io5';
import NavMarker from './NavMarker';
import { journeyData } from '../contentData';
import ContentModule from './ContentModule';

export default function JourneyContent() {
	const pageName = 'journey';

	const [counter, setCounter] = useState(1);

	function arrowScroll(direction, sectionsArr) {
		//getting the scroller
		let scroller = document.getElementById(`${pageName}-scroller`);
		let wrapper = document.getElementById(`${pageName}-wrapper`);

		//getting all styles from scroller
		let contentWrapperStyle = document.defaultView.getComputedStyle(wrapper);
		//getting height of scroller and removing px to have a pure number
		let scrollValue = parseInt(contentWrapperStyle.height);
		//applying scrolling to
		if (direction === 'left' && counter > 1) {
			setCounter(() => counter - 1);
			scroller.scrollLeft -= scrollValue * 2;
			console.log('COUNTER ', counter);
		} else if (direction === 'right' && counter < sectionsArr.length) {
			setCounter(() => counter + 1);
			scroller.scrollLeft += scrollValue * 2;
			console.log('COUNTER ', counter);
		}
	}

	function renderLeftArrow(counter, dataArr) {
		if (counter > 1) {
			return <IoChevronBackCircle className='arrow-icon active' />;
		} else {
			return <IoChevronBackCircle className='arrow-icon inactive' />;
		}
	}

	function renderRightArrow(counter, sectionArr) {
		if (counter < sectionArr.length) {
			return <IoChevronForwardCircle className='arrow-icon active' />;
		} else {
			return <IoChevronForwardCircle className='arrow-icon inactive' />;
		}
	}

	return (
		<div className='page-content'>
			<div id={pageName + '-scroller'} className='content-scroller'>
				<div id={pageName + '-wrapper'} className='content-wrapper'>
					{journeyData.map((journeyData) => {
						return (
							<>
								<ContentModule data={journeyData.subsections[0]} />
								<ContentModule data={journeyData.subsections[1]} />
							</>
						);
					})}
					<ContentModule data='none' />
				</div>
			</div>

			<div className='content-navigation'>
				<div
					className='content-arrow-left'
					onClick={() => {
						arrowScroll('left', journeyData);
					}}
				>
					{renderLeftArrow(counter)}
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
						arrowScroll('right', journeyData);
					}}
				>
					{renderRightArrow(counter, journeyData)}
				</div>
			</div>
		</div>
	);
}
