import React, { useState, useEffect } from 'react';
import { IoChevronBackCircle } from 'react-icons/io5';
import { IoChevronForwardCircle } from 'react-icons/io5';
import NavMarker from './NavMarker';
import { journeyData } from '../contentData';
import ContentModule from './ContentModule';

export default function JourneyContent() {
	//update these:
	const pageName = 'journey';
	const contentData = journeyData;
	//

	const [arrowState, setArrows] = useState({ left: false, right: true });

	function arrowScroll(direction, sectionsArr) {
		let scroller = document.getElementById(`${pageName}-scroller`);
		let wrapper = document.getElementById(`${pageName}-wrapper`);
		let contentWrapperStyle = document.defaultView.getComputedStyle(wrapper);

		let scrollValue = parseInt(contentWrapperStyle.height);

		if (direction === 'left' && scroller.scrollLeft > 0) {
			scroller.scrollLeft -= scrollValue * 1;
		}

		if (
			direction === 'right' &&
			scroller.scrollLeft < scrollValue * (sectionsArr.length * 2 - 1)
		) {
			scroller.scrollLeft += scrollValue * 1;
		}
	}

	function arrowStatus(sectionArr) {
		let scroller = document.getElementById(`${pageName}-scroller`);
		let wrapper = document.getElementById(`${pageName}-wrapper`);
		let contentWrapperStyle = document.defaultView.getComputedStyle(wrapper);
		let scrollValue = parseInt(contentWrapperStyle.height);
		console.log('scroll value:', scroller.scrollLeft);

		if (scroller.scrollLeft === 0) {
			setArrows(() => ({ left: false, right: true }));
			console.log('&&&&&&', 1);
		}
		if (
			0 < scroller.scrollLeft &&
			scroller.scrollLeft < scrollValue * (sectionArr.length * 2 - 1)
		) {
			setArrows(() => ({ left: true, right: true }));
			console.log('&&&&&&', 2);
		}
		if (scroller.scrollLeft >= scrollValue * (sectionArr.length * 2 - 1)) {
			setArrows(() => ({ left: true, right: false }));
			console.log('&&&&&&', 3);
		}
	}

	function renderLeftArrow() {
		if (arrowState.left) {
			console.log('ACTIVE');
			return <IoChevronBackCircle className='arrow-icon active' />;
		} else {
			console.log('INACTIVE');
			return <IoChevronBackCircle className='arrow-icon inactive' />;
		}
	}

	function renderRightArrow() {
		if (arrowState.right) {
			return <IoChevronForwardCircle className='arrow-icon active' />;
		} else {
			return <IoChevronForwardCircle className='arrow-icon inactive' />;
		}
	}

	return (
		<div className='page-content'>
			<div
				id={pageName + '-scroller'}
				className='content-scroller'
				onScroll={() => arrowStatus(contentData)}
			>
				{/* {console.log('RENDER')} */}
				<div id={pageName + '-wrapper'} className='content-wrapper'>
					{contentData.map((contentData) => {
						return (
							<>
								<ContentModule data={contentData.subsections[0]} />
								<ContentModule data={contentData.subsections[1]} />
							</>
						);
					})}
					<ContentModule data='none' />
					<ContentModule data='none' />
				</div>
			</div>

			<div className='content-navigation'>
				<div className='content-arrow'>
					<div
						className='arrow-wrapper'
						onClick={() => {
							arrowScroll('left', contentData);
						}}
					>
						{renderLeftArrow()}
					</div>
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

				<div className='content-arrow'>
					<div
						className='arrow-wrapper'
						onClick={() => {
							arrowScroll('right', contentData);
						}}
					>
						{renderRightArrow()}
					</div>
				</div>
			</div>
		</div>
	);
}
