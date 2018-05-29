import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
// import './App.css';

import { 
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './../NotFound';
import Auth from './../Auth';
import Home from './../Home';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import notRequireAuth from './../../util/notRequireAuth';
import requireAuth from './../../util/requireAuth';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className='background'>
            <Header/>
            <div className='container'>
              {/* {this.props.children} */}
              <Switch>
                <Route exact path="/" component={notRequireAuth(Auth)} />
                <Route path="/home" component={requireAuth(Home)} />
                <Route path="/*" component={NotFound} />
                {/* <Route path="*" render={() => { return <h1>NotFound Page</h1> }} /> */}
              </Switch>
            </div>
            <Footer/>
        </div> 
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  // children: PropTypes.object.isRequired,
  // dispatch: PropTypes.func.isRequired,
  
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
   
  };
}

export default connect(mapStateToProps)(App);
