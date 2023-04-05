import React, { useState, useEffect } from 'react';

export default function SideMenu() {
	// window.onscroll = function () {
	// 	moveBarOnScroll();
	// };

	// function moveBarOnScroll() {
	// 	let selectBar = document.getElementById('menu-select-bar');
	// 	const scrollPosition = document.documentElement.scrollTop;
	// 	const screenHeight = window.innerHeight;
	// 	const scrollRatio = (scrollPosition / screenHeight) * 30;
	// 	selectBar.style.top = `${scrollRatio}vh`;
	// }

	function menuScroll(location) {
		const screenHeight = window.innerHeight;
		window.scrollTo({
			top: screenHeight * location,
			behavior: 'smooth',
		});
	}

	return (
		<div id='side-menu'>
			<div id='menu-select-bar'></div>
			<div
				id='menu-journey'
				onClick={() => {
					menuScroll(0);
				}}
			>
				JOURNEY
			</div>
			<div
				id='menu-products'
				onClick={() => {
					menuScroll(1);
				}}
			>
				PRODUCTS
			</div>
			<div
				id='menu-motivation'
				onClick={() => {
					menuScroll(2);
				}}
			>
				INTERESTS
			</div>
			<div
				id='menu-summary'
				onClick={() => {
					menuScroll(3);
				}}
			>
				SUMMARY
			</div>
		</div>
	);
}
