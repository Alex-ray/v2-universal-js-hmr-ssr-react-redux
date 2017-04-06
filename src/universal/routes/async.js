import React from 'react';

function asyncRoute(getComponent) {
  return class AsyncComponent extends React.Component {
    state = {
      Component: null
    };

    componentDidMount() {
      if ( this.state.Component === null ) {
        getComponent().then((Component) => {
          this.setState({Component: Component});
        })
      }
    }

    render() {
      const {
        Component
      } = this.state;

      if ( Component ) {
        return (<Component {...this.props} />);
      }
      return (<div>loading...</div>); // or <div /> with a loading spinner, etc..
    }
  }
}

export const Home = asyncRoute(() => {
  return System.import('../components/Home/Home.js');
});

export const Counter = asyncRoute(() => {
  return System.import('../modules/counter/containers/Counter/CounterContainer.js');
});
