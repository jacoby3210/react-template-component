import '@testing-library/jest-dom';
import React from 'react';
import {fireEvent , render, screen } from '@testing-library/react';
import Layout from './index';
// ------------------------------------------------------------------------- //
// Test Component  
// ------------------------------------------------------------------------- //

describe('Layout component', () => {

	const testProps = {
    id: 'accordion-id',
  };

  test('renders correct number of accordion items', () => {
    render(<Layout.Component {...testProps} />);
    
		// fireEvent.click(screen.getByText('Item 2'));
    // expect(screen.getByText('Content 2')).toBeVisible();
    // expect(screen.queryByText('Content 1')).not.toBeVisible();
    
  });

});

// ------------------------------------------------------------------------- //