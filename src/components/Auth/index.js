import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Style
import './styles.css';

import Login from './Pages/Login/LoginPage';
import SignUp from './Pages/SignUp/SignUpPage';
// import NotFound from './../NotFound';

//import Routes
import { 
    Route,
    Switch,
  } from 'react-router-dom';


export class Auth extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  render() {
    return (
      <div  className='background'>
        <div className='container'>
            {/* {this.props.children} */}
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route path="*" component={Login}/>
            </Switch>
        </div>
      </div>
    );
  }
}

Auth.propTypes = {
  // children: PropTypes.object.isRequired
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
  };
}

export default connect(mapStateToProps)(Auth);
