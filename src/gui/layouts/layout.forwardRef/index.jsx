import React, { useEffect, useRef, useState } from 'react';
import * as cfg from "./config"
import * as code from "./code"
// ------------------------------------------------------------------------- //
// React Component (forwardRef version) 
// ------------------------------------------------------------------------- //

export const Component = React.forwardRef((receivedProps, ref) => {

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

Component.propTypes = cfg.propTypes;
export const NativeExample = {cfg, Component}

// ------------------------------------------------------------------------- //