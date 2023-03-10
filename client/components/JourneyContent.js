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

	function navStatus(sectionArr) {
		let scroller = document.getElementById(`${pageName}-scroller`);
		let wrapper = document.getElementById(`${pageName}-wrapper`);
		let contentWrapperStyle = document.defaultView.getComputedStyle(wrapper);
		let scrollValue = parseInt(contentWrapperStyle.height);

		let activeNavNumber = Math.floor(scroller.scrollLeft / (scrollValue * 2));
		console.log('scroller', scroller.scrollLeft);
		console.log('scrollValue: ', scrollValue);
		console.log('ACTIVE NAV: ', activeNavNumber);
		let activeNavName = sectionArr[activeNavNumber].sectionName;
		let activeNav = document.getElementById(`nav-${activeNavName}`);

		activeNav.style.color = 'black';
	}

	function arrowStatus(sectionArr) {
		let scroller = document.getElementById(`${pageName}-scroller`);
		let wrapper = document.getElementById(`${pageName}-wrapper`);
		let contentWrapperStyle = document.defaultView.getComputedStyle(wrapper);
		let scrollValue = parseInt(contentWrapperStyle.height);

		if (scroller.scrollLeft === 0) {
			setArrows(() => ({ left: false, right: true }));
		}
		if (
			0 < scroller.scrollLeft &&
			scroller.scrollLeft < scrollValue * (sectionArr.length * 2 - 1)
		) {
			setArrows(() => ({ left: true, right: true }));
		}
		if (scroller.scrollLeft >= scrollValue * (sectionArr.length * 2 - 1)) {
			setArrows(() => ({ left: true, right: false }));
		}
	}

	function renderLeftArrow() {
		if (arrowState.left) {
			return <IoChevronBackCircle className='arrow-icon active' />;
		} else {
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
				onScroll={() => {
					arrowStatus(contentData);
					navStatus(contentData);
				}}
			>
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
						{contentData.map((contentData) => {
							return (
								<NavMarker
									text={contentData.sectionName}
									id={`nav-${contentData.sectionName}`}
								/>
							);
						})}

						{/* <NavMarker text='COLLEGE' />
						<NavMarker text='JOBS' />
						<NavMarker text='CAREER CHANGE' />
						<NavMarker text='TODAY' /> */}
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
