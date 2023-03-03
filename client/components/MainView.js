import React, { useState, useEffect } from 'react';
import PageContent from './PageContent';
import SiteOverlay from './SiteOverlay';

export default function MainView() {
	window.onscroll = function () {
		slidePages();
		moveBarOnScroll();
	};
	function slidePages() {
		const scrollPosition = document.documentElement.scrollTop;
		const screenHeight = window.innerHeight;
		let journeyPage = document.getElementById('journey');
		let productsPage = document.getElementById('products');
		let motivationPage = document.getElementById('motivation');
		let summaryPage = document.getElementById('summary');
		// console.log('Scroll position: ', scrollPosition);

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
	function colorChange() {
		const scrollPosition = document.documentElement.scrollTop;
		const screenHeight = window.innerHeight;
		const positionRatio = Math.round(
			Math.min(scrollPosition / screenHeight, 1)
		);
		const colorChangeRatio = 0.5;
	}
	function moveBarOnScroll() {
		let selectBar = document.getElementById('menu-select-bar');
		const scrollPosition = document.documentElement.scrollTop;
		const screenHeight = window.innerHeight;
		const scrollRatio = (scrollPosition / (screenHeight * 4)) * 30;
		selectBar.style.top = `${scrollRatio + 10}vh`;
	}

	function snapView() {}
	return (
		<div id='main-view'>
			<SiteOverlay />

			<div id='journey' className='page'>
				<div id='journey-menu' className='side-menu-space'></div>
				<div id='journey-content' className='content'>
					<h1>Journey</h1>
				</div>
			</div>

			<div id='products' className='page'>
				<div id='products-menu' className='side-menu-space'></div>
				<div id='products-content' className='content'>
					<h1>Products</h1>
				</div>
			</div>

			<div id='motivation' className='page'>
				<div id='motivation-menu' className='side-menu-space'></div>
				<div id='motivation-content' className='content'>
					<h1>Motivation</h1>
				</div>
			</div>

			<div id='summary' className='page'>
				<div id='summary-menu' className='side-menu-space'></div>
				<div id='summary-content' className='content'>
					<h1>Summary</h1>
				</div>
			</div>
		</div>
	);
}
