import React, { useState, useEffect } from 'react';

import {
	BlankComponent,
	TestComponent,
	JourneyQuote,
	MotivationQuote,
	JourneyColors,
	JourneySpaces,
	JourneyNumbers,
	JourneyPlaces,
	CanoePic,
	DaVinciPic,
	StampPic,
	BridgePic,
	BuildingPic,
	ArtWall,
	Molbert,
	CanoeSplit,
	Graduation,
	KSS,
	EY,
	Samarkand,
	Falcon,
	FSDiploma,
	BuildingsBCM,
} from './components/Contents';

export const journeyData = [
	{
		navAreaName: 'BEGINNINGS',
		sections: [
			{
				imageUrl: '',
				subsections: [<JourneyQuote />],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/art%20school%20wall.png',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [<TestComponent />, <TestComponent />],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [<Molbert />, <DaVinciPic />],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				subsections: [<ArtWall />],
			},

			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/envelope.png',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [<TestComponent />, <StampPic />],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 1)',
				subsections: [<BlankComponent />],
			},
		],
	},
	{
		navAreaName: 'STUDIES',
		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/college%20wall.png',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [<TestComponent />],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [<BridgePic />, <CanoePic />, <CanoeSplit />],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/buildings-background-center.png',
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				subsections: [<TestComponent />, <BuildingPic />],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [<Graduation />],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 1)',
				subsections: [<BlankComponent />],
			},
		],
	},
	{
		navAreaName: 'WORK',
		sections: [
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/work%20cover%20small.png',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [<TestComponent />],
			},
			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [<KSS />, <EY />],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/industry%20wall.png',
				backgroundColor: 'rgba(0, 0, 0, 0.85)',
				subsections: [<TestComponent />, <Samarkand />, <Falcon />],
			},

			{
				imageUrl: '',
				backgroundColor: 'rgba(0, 0, 0, 0.3)',
				subsections: [<BuildingsBCM />],
			},
			{
				imageUrl: '',
				subsections: [<TestComponent />],
			},
			{
				imageUrl:
					'https://storage.googleapis.com/kostya-works-public/design/journey/coding-cover.png',
				backgroundColor: 'rgba(0, 0, 0, 1)',
				subsections: [<BlankComponent />, <TestComponent />, <FSDiploma />],
			},
		],
	},
];

export const productsData = [
	{
		navAreaName: 'NOUGAT NEWS',
		sections: [
			{
				sectionName: 'NOUGAT NEWS',
				imageUrl:
					'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8cPYVlnfnfeApLXctxsPUQHaFj%26pid%3DApi&f=1&ipt=f56fd79f7fb63f050947819d7f9ebea4febe5548a38e6bcf014a18d5fc45141c&ipo=images',
				subsections: [<TestComponent />, <TestComponent />],
			},
		],
	},
	{
		navAreaName: 'PANDEMIC BEAT',
		sections: [
			{
				sectionName: 'PANDEMIC BEAT',
				imageUrl:
					'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dJsmGYE5p58_VxnNuFCJ3gHaFj%26pid%3DApi&f=1&ipt=c99f355fe84005d3a31d42756850df769f17264c05bae732b64cd14b8f651d76&ipo=images',
				subsections: [<TestComponent />, <TestComponent />, <TestComponent />],
			},
		],
	},
	{
		navAreaName: 'CHATATOR',
		sections: [
			{
				sectionName: 'CHATATOR',
				imageUrl:
					'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y4nhq0UDQzIIiMAzUNGmvgHaFj%26pid%3DApi&f=1&ipt=5187dde5b714f2a7a7447e022d2b5792046c0199854a0cb247267956463738e9&ipo=images',
				subsections: [<TestComponent />, <TestComponent />],
			},
		],
	},
];

export const motivationData = [
	{
		navAreaName: 'CREATIVITY',
		sections: [
			{
				sectionName: 'CREATIVITY',
				imageUrl:
					'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y4nhq0UDQzIIiMAzUNGmvgHaFj%26pid%3DApi&f=1&ipt=5187dde5b714f2a7a7447e022d2b5792046c0199854a0cb247267956463738e9&ipo=images',
				subsections: [<MotivationQuote />, <BlankComponent />],
			},
		],
	},
	{
		navAreaName: 'MEDIA',
		sections: [
			{
				sectionName: 'MEDIA',
				imageUrl:
					'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dJsmGYE5p58_VxnNuFCJ3gHaFj%26pid%3DApi&f=1&ipt=c99f355fe84005d3a31d42756850df769f17264c05bae732b64cd14b8f651d76&ipo=images',
				subsections: [<TestComponent />, <TestComponent />],
			},
		],
	},
	{
		navAreaName: 'DATA',
		sections: [
			{
				sectionName: 'DATA',
				imageUrl:
					'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y4nhq0UDQzIIiMAzUNGmvgHaFj%26pid%3DApi&f=1&ipt=5187dde5b714f2a7a7447e022d2b5792046c0199854a0cb247267956463738e9&ipo=images',
				subsections: [
					<TestComponent />,
					<TestComponent />,
					<TestComponent />,
					<TestComponent />,
				],
			},
		],
	},
];

export const summaryData = [
	{
		navAreaName: 'CONTACT ME',
		sections: [
			{
				sectionName: 'CONTACT ME',
				imageUrl:
					'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8cPYVlnfnfeApLXctxsPUQHaFj%26pid%3DApi&f=1&ipt=f56fd79f7fb63f050947819d7f9ebea4febe5548a38e6bcf014a18d5fc45141c&ipo=images',
				subsections: [<TestComponent />, <TestComponent />],
			},
		],
	},

	{
		navAreaName: 'COLLABS',
		sections: [
			{
				sectionName: 'COLLABORATIONS',
				imageUrl:
					'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dJsmGYE5p58_VxnNuFCJ3gHaFj%26pid%3DApi&f=1&ipt=c99f355fe84005d3a31d42756850df769f17264c05bae732b64cd14b8f651d76&ipo=images',
				subsections: [<TestComponent />, <TestComponent />],
			},
			{
				sectionName: 'JOBS',
				imageUrl:
					'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y4nhq0UDQzIIiMAzUNGmvgHaFj%26pid%3DApi&f=1&ipt=5187dde5b714f2a7a7447e022d2b5792046c0199854a0cb247267956463738e9&ipo=images',
				subsections: [<TestComponent />],
			},
		],
	},
];
