import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import createHistory from "history/createBrowserHistory"
// const history = createHistory();
const localStorage =  require('localStorage');

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      let auth = localStorage.getItem('token');
      if (!auth) {
        this.props.history.push('/');
      }
    }

    // componentWillUpdate(nextProps) {
    //   let auth = localStorage.getItem('token');
    //   if (!auth) {
    //     this.context.router.push('/auth');
    //   }
    // }

    render() {
      return (
        <ComposedComponent {...this.props}/>
      );
    }
  }

  Authenticate.propTypes = {
    // isLogged: React.PropTypes.bool.isRequired,
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
    };
  }

  return connect(mapStateToProps)(Authenticate);
}
