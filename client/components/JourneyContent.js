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
	const [activeSection, setActiveSection] = useState(0);
	const [navArr, setNavArr] = useState([]);
	const [subsectionsCount, setSubsectionsCount] = useState(0);

	useEffect(() => {
		if (navArr.length === 0) {
			returnNavArr(contentData, pageName, setNavArr);
		}

		if (subsectionsCount === 0) {
			let count = 0;
			contentData.map((navArea) => {
				navArea.sections.map((section) => {
					count += section.subsections.length;
				});
			});

			setSubsectionsCount(count);
		}
	});

	return (
		<div className='page-content'>
			{contentData.map((navArea) => {
				const toReturn = navArea.sections.map((section) => {
					return (
						<div
							className={activateContentSlide(
								navArea,
								section,
								activeNav,
								activeSection,
								contentData
							)}
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
				});

				return toReturn;
			})}
			<div
				id={pageName + '-scroller'}
				className='content-scroller'
				onScroll={() => {
					arrowStatus(pageName, subsectionsCount, setArrows);
					navStatus(navArr, pageName, setActiveNav, setActiveSection);

					console.log(
						'active nav:',
						activeNav,
						'active section: ',
						activeSection
					);

					// sectionContent(navArr, contentData);
				}}
			>
				<div id={pageName + '-wrapper'} className='content-wrapper'>
					{contentData.map((navArea) => {
						const toReturn = navArea.sections.map((section) => {
							const toReturn = section.subsections.map((subsection) => {
								return <ContentModule component={subsection} />;
							});
							return toReturn;
						});
						return toReturn;
					})}

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
						{contentData.map((navArea) => {
							return (
								<NavMarker
									index={contentData.indexOf(navArea)}
									text={navArea.navAreaName}
									activeNav={activeNav}
									navArr={navArr}
									pageName={pageName}
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
