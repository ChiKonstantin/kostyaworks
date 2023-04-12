import React, { useState, useEffect } from 'react';
import { IoChevronBackCircle } from 'react-icons/io5';
import { IoChevronForwardCircle } from 'react-icons/io5';

export function moveBarOnScroll() {
	let selectBar = document.getElementById('menu-select-bar');
	let sideMenu = document.getElementById('side-menu');

	let sideMenuStyle = document.defaultView.getComputedStyle(sideMenu);

	const scrollPosition = document.documentElement.scrollTop;
	const screenHeight = window.innerHeight;

	const scrollRatio =
		(scrollPosition / (screenHeight * 4)) * parseInt(sideMenuStyle.height);

	selectBar.style.top = `${parseInt(sideMenuStyle.top) + scrollRatio}px`;
}

//OK
export function returnNavArr(contentArr, pageName, setNavArr) {
	let scroller = document.getElementById(`${pageName}-scroller`);
	let scrollerStyle = document.defaultView.getComputedStyle(scroller);

	let navArr = [];

	//scroller width is equal to module width
	let moduleWidth = parseInt(scrollerStyle.width);
	let navAreaOffset = 0;
	let sectionOffset = 0;
	let sectionsArr = [];

	contentArr.map((navArea) => {
		navArea.sections.map((section) => {
			sectionsArr.push({
				index: navArea.sections.indexOf(section),
				startLocation: sectionOffset,
			});
			sectionOffset = sectionOffset + moduleWidth * section.subsections.length;
		});

		navArr.push({
			index: contentArr.indexOf(navArea),
			startLocation: navAreaOffset,
			sections: sectionsArr,
		});

		navAreaOffset = sectionOffset;
		sectionsArr = [];
	});
	// console.log('NAV ARR: ', navArr);
	setNavArr(navArr);
}

export function activateContentSlide(
	navArea,
	section,
	activeNav,
	activeSection,
	contentData
) {
	if (
		contentData.indexOf(navArea) === activeNav &&
		navArea.sections.indexOf(section) === activeSection
	) {
		return 'content-slide active';
	} else {
		return 'content-slide';
	}
}

export function arrowScroll(direction, pageName, subsectionsCount) {
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

export function navStatus(navArr, pageName, setActiveNav, setActiveSection) {
	let scroller = document.getElementById(`${pageName}-scroller`);
	let scrollerStyle = document.defaultView.getComputedStyle(scroller);
	//scroller width is equal to module width
	let scrollerWidth = parseInt(scrollerStyle.width);

	// const activeNavNumber = Math.floor(
	// 	(scroller.scrollLeft + scrollValue / 2) / (scrollValue * 2)
	// );

	for (let i = navArr.length - 1; i >= 0; i--) {
		// console.log('', arr[i]);
		if (scroller.scrollLeft + scrollerWidth / 2 >= navArr[i].startLocation) {
			// console.log(arr[i].index);
			setActiveNav(navArr[i].index);
			for (let j = navArr[i].sections.length - 1; j >= 0; j--) {
				if (
					scroller.scrollLeft + scrollerWidth / 2 >=
					navArr[i].sections[j].startLocation
				) {
					setActiveSection(navArr[i].sections[j].index);
					break;
				}
			}

			break;
		}
	}
}

export function arrowStatus(pageName, subsectionsCount, setArrows) {
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

export function renderLeftArrow(direction) {
	if (direction) {
		return <IoChevronBackCircle className='arrow-icon active' />;
	} else {
		return <IoChevronBackCircle className='arrow-icon inactive' />;
	}
}

export function renderRightArrow(direction) {
	if (direction) {
		return <IoChevronForwardCircle className='arrow-icon active' />;
	} else {
		return <IoChevronForwardCircle className='arrow-icon inactive' />;
	}
}
