import PropTypes from 'prop-types';
// ========================================================================= //
// Constants
// ========================================================================= //

export const CSS_CLASS_DEFAULT = 'prefix-component';

// ========================================================================= //
// Type checking.
// ========================================================================= //

export const propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.object,
	]),
	id: PropTypes.string,
};

// ========================================================================= //
// Type checking.
// ========================================================================= //

export const propValues = (className, id = null) => ({
	children: [],
	className,
	id: id,
});


// ========================================================================= //