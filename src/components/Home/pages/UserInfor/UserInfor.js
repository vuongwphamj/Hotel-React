import React, { Component } from 'react';
import { connect } from 'react-redux';
// import styles from './UserInfor.css';

export class UserInfor extends Component {
  constructor(props) {
    super(props);
    // this.state = { open: false };
  }

  componentWillMount(){
    // this.props.dispatch({type:'GET_USER_INF'})
  }
  componentDidMount() {
  }

  render() {
    return (
      <div className='container'>
        <div style={{margin: '60px', textAlign:'center'}}>
          <h1>User: {this.props.user.username}</h1>
          <h3>Email: {this.props.user.email}</h3>
          <h3>Create Date: {this.props.user.createdDate}</h3>
          <h3>Update Date: {this.props.user.updateDate}</h3>
        </div>
      </div>
    );
  }
}

UserInfor.propTypes = {
  // children: PropTypes.object.isRequired
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    user: store.home.user
  };
}

export default connect(mapStateToProps)(UserInfor);
