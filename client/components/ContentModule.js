import React, { useState, useEffect } from 'react';
// import { TextComponent } from './Contents';

export default function ContentModule(props) {
	if (props.data === 'none') {
		return <section className='content-module'></section>;
	} else {
		return <section className='content-module'>{props.component}</section>;
	}
}

//
