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
		let scroller = document.getElementById(`${pageName}-scroller`);
		let scrollerStyle = document.defaultView.getComputedStyle(scroller);

		let arr = [];
		//scroller width is equal to module width
		let moduleWidth = parseInt(scrollerStyle.width);
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

	function activateContentSlide(section, activeNav) {
		if (contentData.indexOf(section) === activeNav) {
			return 'content-slide active';
		} else {
			return 'content-slide';
		}
	}

	function arrowScroll(direction, sectionsArr) {
		let scroller = document.getElementById(`${pageName}-scroller`);
		let scrollerStyle = document.defaultView.getComputedStyle(scroller);
		//scroller width is equal to module width
		let scrollerWidth = parseInt(scrollerStyle.width);

		if (direction === 'left' && scroller.scrollLeft > 0) {
			scroller.scrollLeft -= scrollerWidth;
		}

		if (
			direction === 'right' &&
			scroller.scrollLeft < scrollerWidth * (subsectionsCount - 1)
		) {
			scroller.scrollLeft += scrollerWidth;
		}
	}

	function navStatus(arr) {
		let scroller = document.getElementById(`${pageName}-scroller`);
		let scrollerStyle = document.defaultView.getComputedStyle(scroller);
		//scroller width is equal to module width
		let scrollerWidth = parseInt(scrollerStyle.width);

		// const activeNavNumber = Math.floor(
		// 	(scroller.scrollLeft + scrollValue / 2) / (scrollValue * 2)
		// );

		for (let i = arr.length - 1; i >= 0; i--) {
			// console.log('', arr[i]);
			if (scroller.scrollLeft + scrollerWidth / 2 >= arr[i].startLocation) {
				// console.log(arr[i].index);
				setActiveNav(arr[i].index);

				break;
			}
		}
	}

	// function sectionContent(arr, data) {
	// 	const contentsArray = arr;

	// 	let scroller = document.getElementById(`${pageName}-scroller`);
	// 	let scrollerStyle = document.defaultView.getComputedStyle(scroller);
	// 	let scrollerWidth = parseInt(scrollerStyle.width);
	// 	for (let i = arr.length - 1; i >= 0; i--) {
	// 		// console.log('', arr[i]);
	// 		if (scroller.scrollLeft >= arr[i].startLocation) {
	// 			// console.log(arr[i].index);
	// 			setActiveNav(arr[i].index);
	// 			break;
	// 		}
	// 	}
	// }

	function arrowStatus() {
		let scroller = document.getElementById(`${pageName}-scroller`);
		let scrollerStyle = document.defaultView.getComputedStyle(scroller);
		//scroller width is equal to module width
		let scrollerWidth = parseInt(scrollerStyle.width);

		if (scroller.scrollLeft === 0) {
			setArrows(() => ({ left: false, right: true }));
		}
		if (
			0 < scroller.scrollLeft &&
			scroller.scrollLeft < scrollerWidth * (subsectionsCount - 1)
		) {
			setArrows(() => ({ left: true, right: true }));
		}
		if (scroller.scrollLeft >= scrollerWidth * (subsectionsCount - 1)) {
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
			{contentData.map((section) => {
				return (
					<div
						className={activateContentSlide(section, activeNav)}
						style={{
							backgroundImage: `url(${section.imageUrl})`,
						}}
					></div>
				);
			})}
			<div
				id={pageName + '-scroller'}
				className='content-scroller'
				onScroll={() => {
					arrowStatus();
					navStatus(navArr);

					// sectionContent(navArr, contentData);
				}}
			>
				<div id={pageName + '-wrapper'} className='content-wrapper'>
					{contentData.map((contentData) => {
						const toReturn = contentData.subsections.map((subsection) => {
							return <ContentModule component={subsection} />;
						});
						return toReturn;
					})}
					<ContentModule data='none' />
					{/* <ContentModule data='none' /> */}
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
									navArr={navArr}
								/>
							);
						})}
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
