import React, { useEffect, useRef, useState } from 'react';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ------------------------------------------------------------------------- //
// React Component (classic version)
// ------------------------------------------------------------------------- //

export const Component = props => {

	// initial data
	const {id, children, ...attributes} = props;

	// hooks
	const self = useRef();
	const [valueState, setValueState] = useState(false);
	useEffect(() => {}, []);

	// input from user
	const handleClick = () => setValueState(0);

	// render 
	return (
		<div id={id} ref={self} onClick={handleClick} {...attributes}>
			{children}
		</div>
	);
};

Component.propTypes = propTypes;
export const NativeExample = {Component, defaultProps}

// ------------------------------------------------------------------------- //