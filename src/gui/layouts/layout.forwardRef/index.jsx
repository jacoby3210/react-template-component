import React, { useEffect, useRef, useState } from 'react';
import {DEFAULT_CLASS, defaultProps, propTypes } from "./config"
// ------------------------------------------------------------------------- //
// React Component (forwardRef version) 
// ------------------------------------------------------------------------- //

export const Example = React.forwardRef((receivedProps, ref) => {

	// initial data
	const {id, children, ...attributes} = props;

	// hooks
	const [valueState, setValueState] = useState(false);
	useEffect(() => {}, []);

	// input from user
	const handleClick = () => setValueState(0);

	// render 
	return (
		<div id={id} ref={ref} onClick={handleClick} {...attributes}>
			{children}
		</div>
	);
});

Example.propTypes = propTypes;
export const NativeExample = {Component, defaultProps}


// ------------------------------------------------------------------------- //