import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import styles from './DeleteModel.css';
export class DeleteModelPage extends Component {
  constructor(props){
    super(props);
    // console.log(props);
    this.state={name:'', description:''};
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    // this.props.dispatch({})
  }
  handleClick(e){
    e.preventDefault();
    let modelId = this.props.match.params.model3dId;
    var history = this.props.history;
    this.props.dispatch({type:'DELETE_MODEL', modelId: modelId, history: history})
  }
  render() {
    return (
      <div className='container'>
        <div style={{margin: '20px', textAlign:'center'}}>
          <h1>Delete Model 3D</h1>
          <div>Are you sure to delete this model?</div>
          <br/>
          <FlatButton
            onClick={this.handleClick}
            label="Delete"
            secondary={true}
            className={styles.magin20}
          />
        </div>
      </div>
    );
  }
}

DeleteModelPage.propTypes = {
  // children: PropTypes.object.isRequired
};

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
  };
}

export default connect(mapStateToProps)(DeleteModelPage);
