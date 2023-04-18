import React, { useState, useEffect } from 'react';

import NavMarker from './NavMarker';
import { motivationData } from '../contentData';
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
	const pageName = 'motivation';
	const contentData = motivationData;
	//

	const [arrowState, setArrows] = useState({ left: false, right: true });
	const [activeNav, setActiveNav] = useState(0);
	const [activeSection, setActiveSection] = useState(0);
	const [navArr, setNavArr] = useState([]);
	const [subsectionsCount, setSubsectionsCount] = useState(0);
	const [enableArrow, setEnableArrow] = useState(true);
	const arrowTimer = 400;

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
			<div
				className='content-slide active'
				style={{
					backgroundImage:
						'url(https://storage.googleapis.com/kostya-works-public/design/interests/hearts.png)',
					filter: blur('4px'),
				}}
			></div>
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
								backgroundColor: `${section.backgroundColor}`,
							}}
						>
							<div id='video-cover-wrapper'>
								<video
									id='video-cover'
									src={section.video}
									type='video/mp4'
									preLoad='auto'
									muted
									autoPlay={'autoplay'}
									loop
								></video>
							</div>
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
				}}
			>
				<section id={pageName + '-wrapper'} className='content-wrapper'>
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
				</section>
			</div>

			<div className='content-navigation'>
				<div className='content-arrow'>
					<div
						className='arrow-wrapper'
						onClick={() => {
							if (enableArrow) {
								arrowScroll('left', pageName, subsectionsCount);
								setEnableArrow(false);
								setTimeout(() => {
									setEnableArrow(true);
								}, arrowTimer);
							}
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
							if (enableArrow) {
								arrowScroll('right', pageName, subsectionsCount);
								setEnableArrow(false);
								setTimeout(() => {
									setEnableArrow(true);
								}, arrowTimer);
							}
							// arrowScroll('right', pageName, subsectionsCount);
						}}
					>
						{renderRightArrow(arrowState.right)}
					</div>
				</div>
			</div>
		</div>
	);
}
