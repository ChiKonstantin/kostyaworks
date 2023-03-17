import React, { useState, useEffect } from 'react';

import { TestComponent } from './components/Contents';

export const journeyData = [
	{
		sectionName: 'SCHOOL',
		imageUrl:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8cPYVlnfnfeApLXctxsPUQHaFj%26pid%3DApi&f=1&ipt=f56fd79f7fb63f050947819d7f9ebea4febe5548a38e6bcf014a18d5fc45141c&ipo=images',
		subsections: [
			<TestComponent />,
			<TestComponent />,
			<TestComponent />,
			<TestComponent />,
		],
	},
	{
		sectionName: 'IIT',
		imageUrl:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dJsmGYE5p58_VxnNuFCJ3gHaFj%26pid%3DApi&f=1&ipt=c99f355fe84005d3a31d42756850df769f17264c05bae732b64cd14b8f651d76&ipo=images',
		subsections: [<TestComponent />, <TestComponent />, <TestComponent />],
	},
	{
		sectionName: 'JOBS',
		imageUrl:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y4nhq0UDQzIIiMAzUNGmvgHaFj%26pid%3DApi&f=1&ipt=5187dde5b714f2a7a7447e022d2b5792046c0199854a0cb247267956463738e9&ipo=images',
		subsections: [<TestComponent />, <TestComponent />],
	},
];
