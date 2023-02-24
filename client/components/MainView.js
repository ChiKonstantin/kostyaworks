import React, { useState, useEffect } from 'react';
import PageContent from './PageContent';
import SiteOverlay from './SiteOverlay';

export default function MainView() {
	window.onscroll = function () {
		slidePages();
	};
	function slidePages() {
		const scrollPosition = document.documentElement.scrollTop;
		const screenHeight = window.innerHeight;
		let journeyPage = document.getElementById('journey');
		let productsPage = document.getElementById('products');
		let motivationPage = document.getElementById('motivation');
		let summaryPage = document.getElementById('summary');

		//controlling page 1 div height:
		if (scrollPosition > 0) {
			journeyPage.style.height = `${screenHeight - scrollPosition}px`;
			// journeyPage.style.position = 'fixed';
			// journeyPage.style.top = `-${scrollPosition}px`;
			console.log('DIV HEIGHT: ', journeyPage.style.height);
		}
		// making sure div collapses:

		//controlling page 2 div height:
		if (scrollPosition > screenHeight) {
			productsPage.style.height = `${screenHeight * 2 - scrollPosition}px`;
			journeyPage.style.height = '0px';
			// productsPage.style.position = 'fixed';
			// productsPage.style.top = `-${scrollPosition - screenHeight}px`;
		}
		// else {
		// 	productsPage.style.position = 'fixed';
		// 	productsPage.style.top = `0px`;
		// }
		// making sure div collapses:
		if (scrollPosition > screenHeight * 2) {
			productsPage.style.height = '0px';
		}
		//controlling page 3 div height:
		if (scrollPosition > screenHeight * 2) {
			motivationPage.style.position = 'fixed';
			motivationPage.style.top = `-${scrollPosition - screenHeight * 2}px`;
		} else {
			motivationPage.style.position = 'fixed';
			motivationPage.style.top = '0px';
		}
		// making sure div collapses:
		if (scrollPosition > screenHeight * 3) {
			motivationPage.style.height = '0px';
		}
		//controlling page 4 div height:
		if (scrollPosition > screenHeight * 3) {
			summaryPage.style.position = 'fixed';
			summaryPage.style.top = `-${scrollPosition - screenHeight * 3}px`;
		} else {
			summaryPage.style.position = 'fixed';
			summaryPage.style.top = '0px';
		}
		// making sure div collapses:
		if (scrollPosition > screenHeight * 4) {
			summaryPage.style.height = '0px';
		}
	}
	function colorChange() {
		const scrollPosition = Math.round(document.documentElement.scrollTop);
		const screenHeight = window.innerHeight;
		const positionRatio = Math.min(scrollPosition / screenHeight, 1);
		const colorChangeRatio = 0.5;
	}

	function snapView() {}
	return (
		<div id='main-view'>
			<SiteOverlay />

			<div id='journey' className='page'>
				<img src='https://www.designblendz.com/hubfs/Portfolio/The_Y_Residence_Architectural_Model/1.jpg' />
				{/* <PageContent name='Journey' /> */}
			</div>

			<div id='products' className='page'>
				<PageContent name='Products' />
			</div>

			<div id='motivation' className='page'>
				<PageContent name='Motivation' />
			</div>

			<div id='summary' className='page'>
				<PageContent name='Summary' />
			</div>
		</div>
	);
}
