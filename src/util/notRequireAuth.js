import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import createHistory from "history/createBrowserHistory"
// const history = createHistory();
const localStorage =  require('localStorage');

export default function(ComposedComponent) {
  class notRequireAuth extends React.Component {
    componentWillMount() {
      let auth = localStorage.getItem('token');
      if (auth) {
        // console.log(this.context);
        this.props.history.push('/home');
        // this.context.router.history.push('/home');
      }
    }

    // componentWillUpdate(nextProps) {
    //   let auth = localStorage.getItem('token');
    //   if (auth) {
    //     this.context.router.push('/home');
    //   }
    // }

    render() {
      return (
        <ComposedComponent {...this.props}/>
      );
    }
  }

  notRequireAuth.propTypes = {
    // isLogged: React.PropTypes.bool.isRequired,
  }

  notRequireAuth.contextTypes = {
    router: PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
    };
  }

  return connect(mapStateToProps)(notRequireAuth);
}
