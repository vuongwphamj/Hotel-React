import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';

//import Routes
import { 
  Route,
  Switch,
} from 'react-router-dom';

import MenuLeftShow from './components/MenuLeftShow/MenuLeftShow'
import MenuLeft from './components/MenuLeft/MenuLeft'

import ListModel from  './pages/ListModel/ListModelPage';
import AddModel from './pages/AddModel/AddModelPage';
import DeleteModel from './pages/DeleteModel/DeleteModelPage';
import UpdateModel from './pages/UpdateModel/UpdateModelPage';
import UserInfor from './pages/UserInfor/UserInfor';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentWillMount(){
    var history = this.props.history;
    this.props.dispatch({type:'GET_USER_INF', history: history});
  }
  componentDidMount() {
  }
  handleToggle = () => this.setState({open: !this.state.open});
  handleSignOut = (e) => {
    e.preventDefault();
    var history = this.props.history;
    this.props.dispatch({type:'SIGNOUT', history: history})
  }
  render() {
    return (
      <div className='backgroundHome'>
        {/* <button onClick={this.handleSignOut} >Sign Out</button> */}
        <MenuLeftShow
          open={this.state.open}
          handleToggle={this.handleToggle}
          handleSignOut = {this.handleSignOut}
        />
        <MenuLeft
          handleToggle={this.handleToggle}
          handleSignOut = {this.handleSignOut}
        />
        <div className='containerHome'>
            <Switch>
                <Route exact path="/home" component={ListModel} />
                <Route path="/home/listmodel" component={ListModel} />
                <Route path="/home/addmodel" component={AddModel} />
                <Route path="/home/deletemodel/:model3dId" component={DeleteModel}/>
                <Route path="/home/updatemodel/:model3dId" component={UpdateModel}/>
                <Route path="/home/userinfor" component={UserInfor}/>
                <Route path="/home/*" component={ListModel} />
            </Switch>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // children: PropTypes.object.isRequired
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
  };
}

export default connect(mapStateToProps)(Home);
