import React from "react";

const asyncComponent = (getComponent) => {
  return class AsyncComponent extends React.Component {
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


export default asyncComponent;
