//create a component wrapper
// used to wrap components that use the context data and methods
import React from 'react';
import Context from "/home/edwinna/Desktop/Js/counter/dukapoa/src/Context.js";

const withContext = WrappedComponent => {
    const withHOC = props => {
        return (
            <Context.Consumer>
                {context => <WrappedComponent {...props} context={context} />}
            </Context.Consumer>
        );
    };

    return withHOC;
};

export default withContext;

//makes a higher-order componet that appends our context to a wrapped component property
//prop ensures that the component retains any props that were passed in the first place

