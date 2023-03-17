import React, { useState, useEffect } from 'react';

import { TestComponent } from './components/Contents';

export const journeyData = [
	{
		sectionName: 'SCHOOL',
		sectionImageUrl: 'https://wallpaperaccess.com/full/153244.jpg',
		subsections: [
			<TestComponent />,
			<TestComponent />,
			<TestComponent />,
			<TestComponent />,
		],
	},
	{
		sectionName: 'IIT',
		subsections: [<TestComponent />],
	},
	{
		sectionName: 'JOBS',
		subsections: [],
	},
];
