// ------------------------------------------------------------------------- //
// HOC to smartly merge the component's additional and passed properties.		 //
// ------------------------------------------------------------------------- //

export const withAdditionalProps = (advancedProps) => (WrappedComponent) => {

  return props => {
    return <WrappedComponent {...props}/>
  };

};

// ------------------------------------------------------------------------- //