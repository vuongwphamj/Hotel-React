import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import styles from './UpdateModel.css';
export class UpdateModelPage extends Component {
  constructor(props){
    super(props);
    // console.log(props);
    this.state={name:'', description:''};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    // this.props.dispatch({})
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  handleClick(e){
    e.preventDefault();
    let modelId = this.props.match.params.model3dId;
    // console.log(this.props.params.model3dId);
    // console.log(this.props.match);
    let name = this.state.name;
    let description = this.state.description;
    var history = this.props.history;
    this.props.dispatch({type:'UPDATE_MODEL', modelId: modelId, data: {name, description}, history: history})
  }
  render() {
    return (
      <div className='container'>
        <div style={{margin: '20px', textAlign:'center'}}>
          <h1>Update Model 3D</h1>
          <div>Update</div>
          <TextField
            onChange={this.handleChange}
            hintText="Name"
            floatingLabelText="Name"
            className={styles.magin20}
            name={'name'}
          />
          <TextField
            onChange={this.handleChange}
            hintText="Description"
            floatingLabelText="Description"
            className={styles.magin20}
            name={'description'}
          />
          <div></div>
          <FlatButton
            onClick={this.handleClick}
            label="Update"
            primary={true}
            className={styles.magin20}
          />
        </div>
      </div>
    );
  }
}

UpdateModelPage.propTypes = {
  // children: PropTypes.object.isRequired
};

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
  };
}

export default connect(mapStateToProps)(UpdateModelPage);
