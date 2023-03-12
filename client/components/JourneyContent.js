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
	const [activeNav, setActiveNav] = useState(0);
	// const [contentNavObjStatus, setContentNavObjStatus] = useState(false);
	const [navArr, setNavArr] = useState([{ index: 0, startLocation: 0 }]);
	const [subsectionsCount, setSubsectionsCount] = useState(0);

	useEffect(() => {
		if (navArr.length === 1) {
			returnNavArr(contentData);
		}

		if (subsectionsCount === 0) {
			let count = 0;
			contentData.map((section) => {
				count += section.subsections.length;
			});
			setSubsectionsCount(count);
		}
	});

	function returnNavArr(contentArr) {
		let wrapper = document.getElementById(`${pageName}-wrapper`);
		let contentWrapperStyle = document.defaultView.getComputedStyle(wrapper);

		let arr = [];
		let moduleWidth = parseInt(contentWrapperStyle.height);
		let locationOffset = 0;

		contentArr.map((section) => {
			const sectionIndex = contentArr.indexOf(section);
			const sectionStartLocation = locationOffset;

			arr.push({
				index: sectionIndex,
				startLocation: sectionStartLocation,
			});

			locationOffset =
				locationOffset + moduleWidth * section.subsections.length;
		});

		setNavArr(arr);
	}

	function arrowScroll(direction, sectionsArr) {
		let scroller = document.getElementById(`${pageName}-scroller`);
		let wrapper = document.getElementById(`${pageName}-wrapper`);
		let contentWrapperStyle = document.defaultView.getComputedStyle(wrapper);

		let moduleWidth = parseInt(contentWrapperStyle.height);

		if (direction === 'left' && scroller.scrollLeft > 0) {
			scroller.scrollLeft -= moduleWidth;
		}

		if (
			direction === 'right' &&
			scroller.scrollLeft < moduleWidth * (subsectionsCount - 1)
		) {
			scroller.scrollLeft += moduleWidth;
		}
	}

	function navStatus(arr) {
		let scroller = document.getElementById(`${pageName}-scroller`);
		let wrapper = document.getElementById(`${pageName}-wrapper`);
		let contentWrapperStyle = document.defaultView.getComputedStyle(wrapper);
		let moduleWidth = parseInt(contentWrapperStyle.height);

		// const activeNavNumber = Math.floor(
		// 	(scroller.scrollLeft + scrollValue / 2) / (scrollValue * 2)
		// );

		for (let i = arr.length - 1; i >= 0; i--) {
			// console.log('', arr[i]);
			if (scroller.scrollLeft + moduleWidth / 2 >= arr[i].startLocation) {
				// console.log(arr[i].index);
				setActiveNav(arr[i].index);
				break;
			}
		}
	}

	function arrowStatus(sectionArr) {
		let scroller = document.getElementById(`${pageName}-scroller`);
		let wrapper = document.getElementById(`${pageName}-wrapper`);
		let contentWrapperStyle = document.defaultView.getComputedStyle(wrapper);
		let moduleWidth = parseInt(contentWrapperStyle.height);

		if (scroller.scrollLeft === 0) {
			setArrows(() => ({ left: false, right: true }));
		}
		if (
			0 < scroller.scrollLeft &&
			scroller.scrollLeft < moduleWidth * (subsectionsCount - 1)
		) {
			setArrows(() => ({ left: true, right: true }));
		}
		if (scroller.scrollLeft >= moduleWidth * (subsectionsCount - 1)) {
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
					navStatus(navArr);
				}}
			>
				<div id={pageName + '-wrapper'} className='content-wrapper'>
					{contentData.map((contentData) => {
						const toReturn = contentData.subsections.map((subsection) => {
							return <ContentModule data={subsection} />;
						});
						return toReturn;
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
						{contentData.map((contentElement) => {
							return (
								<NavMarker
									index={contentData.indexOf(contentElement)}
									text={contentElement.sectionName}
									activeNav={activeNav}
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
