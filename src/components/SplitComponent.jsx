import React from "react";

/** splitComponent 
 * Returns a Higher-order component that will handle the async dynamic import.
 * @param {Promise} getComponent - Promise object resulting from the dynamic import() syntax
 * @returns {React.Component} SplitComponent - A component that will dynamically import and render components 
 */

const splitComponent = (getComponent) => {
  /* Must be a class-based component to create a HoC pass-through for the Props, including className */
  return class SplitComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null
      }
    }

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(({ default: Component }) => {
          this.setState({ Component });
        });
      }
    }

    render() {
      const { Component } = this.state; // destructing Component from this.state

      if (Component) {
        // if Component has loaded, then return Component with props
        return <Component {...this.props} />;
      }
      return null;
    }
  };
};


export default splitComponent;
