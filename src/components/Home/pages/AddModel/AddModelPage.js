import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dropzone from 'react-dropzone';

import styles from './AddModel.css';
export class AddModelPage extends Component {
  constructor(props){
    super(props);
    // console.log(props);
    this.state={name:'', description:'',accepted: [], rejected: []};
  }

  componentWillMount(){
    // this.props.dispatch({})
  }
  handleChange = (e) => {
    // if(e.target.name == 'file'){
    //   this.setState({[e.target.name]: e.target.files[0]});
    // }
    // else
    this.setState({[e.target.name]: e.target.value});
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log('Form Submit Upoad Model');
    // console.log(this.state.name);
    // console.log(this.state.description);
    // console.log(this.state.file);
    let name = this.state.name;
    let description = this.state.description;

    if(this.state.accepted[0]){
      // console.log(this.state.accepted);
      let file = this.state.accepted[0];
      // this.state.accepted.map(file => {
      //   console.log(file)
      //   this.props.dispatch({type:'UPLOAD_MODEL', data: {name, description, file}})
      // });
      // console.log(this.state.accepted[0]);
      var history = this.props.history;
      this.props.dispatch({type:'UPLOAD_MODEL', data: {name, description, file}, history: history})
    }

    // let file = this.state.file;
    //
  }
  render() {
    return (
      <div className='container'>


          <form onSubmit={this.onFormSubmit}>
            <div style={{margin: '20px', textAlign:'center'}}>
              <h1>Upload Model 3D</h1>
              <TextField
                onChange={this.handleChange}
                hintText="Name"
                floatingLabelText="Name"
                className={styles.magin20}
                name={'name'}
                required={'true'}
              />
              <div></div>
              <TextField
                onChange={this.handleChange}
                hintText="Description"
                floatingLabelText="Description"
                className={styles.magin20}
                name={'description'}
                required={'true'}
              />
              <div></div>

              <div>Choose Your Files</div>
              <div>
                {
                  this.state.accepted.map(f => {
                    return (
                      <div>
                        <h2>Accepted files</h2>
                        <h6 key={f.name}>{f.name} - {f.size} bytes</h6>
                      </div>
                    );
                  })
                }
              </div>

              <h6>
                {
                  this.state.rejected.map(f => {
                    return (
                      <div>
                        <h2>Rejected files</h2>
                        <h6 style={{color: 'red'}}>Accept only *.zip type. Try again!</h6>
                      </div>
                    );
                  })
                }
              </h6>
              <Dropzone
                style={{margin: 'auto auto', minHeight: '200px', width:'200px', border: '1px dashed #e0e0e0'}}
                accept=".zip"
                onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
              >
                <div style={{width:'100%', height: '100%', marginTop: '10px', color: '#847f7fde'}}>
                  Drop *.zip file in here

                </div>
              </Dropzone>
              <div></div>
              <FlatButton
                // onClick={this.handleClick}
                style={{margin: '20px'}}
                label="Upload"
                primary={true}
                className={styles.magin20}
                type={"submit"}
              />
            </div>
          </form>


      </div>
    );
  }
}

AddModelPage.propTypes = {
  // children: PropTypes.object.isRequired
};

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
  };
}

export default connect(mapStateToProps)(AddModelPage);
