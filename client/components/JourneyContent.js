import React, { useState, useEffect } from 'react';

import NavMarker from './NavMarker';
import { journeyData } from '../contentData';
import ContentModule from './ContentModule';
import {
	returnNavArr,
	activateContentSlide,
	arrowScroll,
	navStatus,
	arrowStatus,
	renderLeftArrow,
	renderRightArrow,
} from '../functions';

export default function JourneyContent() {
	//update these:
	const pageName = 'journey';
	const contentData = journeyData;
	//

	const [arrowState, setArrows] = useState({ left: false, right: true });
	const [activeNav, setActiveNav] = useState(0);
	const [navArr, setNavArr] = useState([{ index: 0, startLocation: 0 }]);
	const [subsectionsCount, setSubsectionsCount] = useState(0);

	useEffect(() => {
		if (navArr.length === 1) {
			returnNavArr(contentData, pageName, setNavArr);
		}

		if (subsectionsCount === 0) {
			let count = 0;
			contentData.map((section) => {
				count += section.subsections.length;
			});
			setSubsectionsCount(count);
		}
	});

	return (
		<div className='page-content'>
			{contentData.map((section) => {
				return (
					<div
						className={activateContentSlide(section, activeNav, contentData)}
						style={{
							backgroundImage: `url(${section.imageUrl})`,
						}}
					>
						{/* <video
							preload='auto'
							style={{ height: '100%', width: 'auto', alignItems: 'center' }}
							src='https://storage.googleapis.com/kostya-works-public/design/S1550015.MP4'
							// controls
							autoPlay
							muted
							loop
						></video> */}
					</div>
				);
			})}
			<div
				id={pageName + '-scroller'}
				className='content-scroller'
				onScroll={() => {
					arrowStatus(pageName, subsectionsCount, setArrows);
					navStatus(navArr, pageName, setActiveNav);

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
							arrowScroll('left', pageName, subsectionsCount);
						}}
					>
						{renderLeftArrow(arrowState.left)}
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
							arrowScroll('right', pageName, subsectionsCount);
						}}
					>
						{renderRightArrow(arrowState.right)}
					</div>
				</div>
			</div>
		</div>
	);
}
