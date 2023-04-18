import React, { useState, useEffect } from 'react';
// import { TextComponent } from './Contents';

export default function ContentModule(props) {
	if (props.data === 'none') {
		return <div className='content-module'></div>;
	} else {
		return <div className='content-module'>{props.component}</div>;
	}
}

//
