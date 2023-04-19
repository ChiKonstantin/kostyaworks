import React, { useState, useEffect } from 'react';
import JourneyContent from './JourneyContent';
import ProductsContent from './ProductsContent';
import MotivationContent from './MotivationContent';
import SummaryContent from './SummaryContent';
import MenuArea from './MenuArea';
import SMIcons from './SMIcons';
import Outlines from './Outlines';
import { moveBarOnScroll } from '../functions';

export default function MainView() {
	const [scrollRange, setScrollRange] = useState({
		topLimit: 0,
		bottomLimit: window.innerHeight,
	});
	const [previousPosition, setPreviousPosition] = useState(0);
	// const [scrollMarker, setScrollMarker] = useState(844);
	const [mobileView, setMobileView] = useState(false);
	let timeOutId = 0;
	document.documentElement.scrollTop = 0.0;
	const marker = window.innerHeight;
	if (window.innerWidth <= 920 && !mobileView) {
		setMobileView(true);
	}

	window.onscroll = function () {
		// let scrollPosition = document.documentElement.scrollTop;
		if (!mobileView) {
			clearTimeout(timeOutId);
			timeOutId = setTimeout(() => {
				snapViewPages();
			}, 100);

			let scrollPosition = document.documentElement.scrollTop;

			slidePages();
			moveBarOnScroll();
		}
	};

	document.getElementsByClassName;

	function slidePages() {
		const scrollPosition = document.documentElement.scrollTop;
		const screenHeight = window.innerHeight;
		let journeyPage = document.getElementById('journey');
		let productsPage = document.getElementById('products');
		let motivationPage = document.getElementById('motivation');
		let summaryPage = document.getElementById('summary');

		// if (scrollPosition > scrollMarker) {
		// 	console.log('MARKER HIT!');
		// 	setEnableScroll(false);
		// 	setScrollMarker(1688);
		// 	setTimeout(() => {
		// 		setEnableScroll(true);
		// 		console.log('TIMEOUT HIT');
		// 	}, 1000);
		// }

		if (scrollPosition === 0) {
			journeyPage.style.height = `${screenHeight}px`;
		}
		if (scrollPosition < screenHeight) {
			products.style.height = `${screenHeight}px`;
		}
		if (scrollPosition < screenHeight * 2) {
			motivationPage.style.height = `${screenHeight}px`;
		}
		if (scrollPosition < screenHeight * 3) {
			summaryPage.style.height = `${screenHeight}px`;
		}

		//controlling page 1 div height:
		if (scrollPosition > 0) {
			journeyPage.style.height = `${screenHeight - scrollPosition}px`;
		}

		//controlling page 2 div height, collapsing div 1:
		if (scrollPosition > screenHeight) {
			productsPage.style.height = `${screenHeight * 2 - scrollPosition}px`;
			journeyPage.style.height = '0px';
		}

		//controlling page 3 div height, collapsing div 2:
		if (scrollPosition > screenHeight * 2) {
			motivationPage.style.height = `${screenHeight * 3 - scrollPosition}px`;
			productsPage.style.height = '0px';
		}
		//controlling page 4 div height, collapsing div 3:
		if (scrollPosition > screenHeight * 3) {
			summaryPage.style.height = `${screenHeight * 4 - scrollPosition}px`;
			motivationPage.style.height = '0px';
		}
		// collapsing div 4:
		if (scrollPosition > screenHeight * 4) {
			summaryPage.style.height = '0px';
		}
	}

	function snapViewPages() {
		let scrollPosition = document.documentElement.scrollTop;
		const snapThresholdValue = 0.5;
		const screenHeight = window.innerHeight;
		const snapThresholdTop = screenHeight * snapThresholdValue;
		const snapThresholdBottom = screenHeight * (1 - snapThresholdValue);
		const pageTopOffset = scrollPosition % screenHeight;
		// console.log('OFFSET, THRESHOLD: ', pageTopOffset, snapThreshold);
		if (pageTopOffset <= snapThresholdTop) {
			document.documentElement.scrollTop = scrollPosition - pageTopOffset;
			// console.log('snap to bottom');
		} else if (pageTopOffset > snapThresholdBottom) {
			document.documentElement.scrollTop =
				scrollPosition + (screenHeight - pageTopOffset);
			// console.log('snap to top');
		}
	}
	return !mobileView ? (
		<div
			id='main-view'
			// onScroll={() => {
			// 	slidePages();
			// 	moveBarOnScroll();
			// }}
		>
			<div id='summary' className='page'>
				<div id='summary-menu' className='side-menu-spacer'></div>
				<div id='summary-content' className='content'>
					<SummaryContent />
				</div>
			</div>

			<div id='motivation' className='page'>
				<div id='motivation-menu' className='side-menu-spacer'></div>
				<div id='motivation-content' className='content'>
					<MotivationContent />
				</div>
			</div>
			<div id='products' className='page'>
				<div id='products-menu' className='side-menu-spacer'></div>
				<div id='products-content' className='content'>
					<ProductsContent />
				</div>
			</div>
			<div id='journey' className='page'>
				<div id='journey-menu' className='side-menu-spacer'></div>
				<div id='journey-content' className='content'>
					<JourneyContent />
				</div>
			</div>

			<MenuArea />
			<SMIcons />
		</div>
	) : (
		<div id='main-view'>
			<section id='journey' className='page'>
				<div id='journey-menu' className='side-menu-spacer'></div>
				<div id='journey-content' className='content'>
					<div id='menu-journey' className='section-name-mobile'>
						JOURNEY
					</div>
					<JourneyContent />
				</div>
			</section>
			<section id='products' className='page'>
				<div id='products-menu' className='side-menu-spacer'></div>
				<div id='products-content' className='content'>
					<div id='menu-products' className='section-name-mobile'>
						PRODUCTS
					</div>
					<ProductsContent />
				</div>
			</section>
			<section id='motivation' className='page'>
				<div id='motivation-menu' className='side-menu-spacer'></div>
				<div id='motivation-content' className='content'>
					<div id='menu-motivation' className='section-name-mobile'>
						INTERESTS
					</div>
					<MotivationContent />
				</div>
			</section>

			<section id='summary' className='page'>
				<div id='summary-menu' className='side-menu-spacer'></div>
				<div id='summary-content' className='content'>
					<div id='menu-summary' className='section-name-mobile'>
						SUMMARY
					</div>
					<SummaryContent />
				</div>
			</section>

			<Outlines />
			<SMIcons />
		</div>
	);
}
