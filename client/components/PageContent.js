import React, { useState, useEffect } from 'react';
import { IoChevronBackCircle } from 'react-icons/io5';
import { IoChevronForwardCircle } from 'react-icons/io5';

export default function PageContent() {
	function arrowRight() {
		let journeyScroller = document.getElementById('journey-scroller');
		journeyScroller.scrollLeft += screen.width - 275;
	}

	function arrowLeft() {
		let journeyScroller = document.getElementById('journey-scroller');
		journeyScroller.scrollLeft -= screen.width - 275;
	}

	return (
		<div className='page-content'>
			<div className='content-wrapper'>
				<div
					className='content-arrow-left'
					onClick={() => {
						arrowLeft();
					}}
				>
					<IoChevronBackCircle className='arrow-icon' />
				</div>
				<div id='journey-scroller' className='content-scroller'>
					<img src='https://storage.googleapis.com/kostya-works-public/design/test%20content.png' />
					<img src='https://storage.googleapis.com/kostya-works-public/design/test%20content.png' />
					<img src='https://storage.googleapis.com/kostya-works-public/design/test%20content.png' />
					<img src='https://storage.googleapis.com/kostya-works-public/design/test%20content.png' />
					<img src='https://storage.googleapis.com/kostya-works-public/design/test%20content.png' />
					{/* <img src='C:\Users\Kostya\Projects Work Bench\Graphics\kostya-works\test content.png' />
				<img src='C:\Users\Kostya\Projects Work Bench\Graphics\kostya-works\test content.png' />
				<img src='C:\Users\Kostya\Projects Work Bench\Graphics\kostya-works\test content.png' />
				<img src='C:\Users\Kostya\Projects Work Bench\Graphics\kostya-works\test content.png' /> */}
					{/* <img src='https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_1600/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg' />
				<img src='https://architecturesideas.com/wp-content/uploads/2018/02/modern-architecture-buildings-9.jpg' />
				<img src='https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2400/hyowdxuvgsqzb4ngaqgq.jpg' /> */}
				</div>
				<div
					className='content-arrow-right'
					onClick={() => {
						arrowRight();
					}}
				>
					<IoChevronForwardCircle className='arrow-icon' />
				</div>
			</div>

			<div id='navigation' className='content-navigation'>
				CONTENT NAVIGATION
			</div>
		</div>
	);
}
