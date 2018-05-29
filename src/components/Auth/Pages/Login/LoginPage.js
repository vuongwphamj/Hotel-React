import React from 'react'
// import Link from 'react-router'
import {connect} from 'react-redux'
import './Login.css'
import LoadingPanel from '../LoadingPanel/LoadingPanel'
class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={email:'',password:'',isLogged:false,isLoading:false,token:''};
    }
    HandleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    HandelClick(e){
      // console.log(this.state);
        var email=this.state.email;
        var password=this.state.password;
        var history = this.props.history;
        this.props.dispatch({type:'LOGIN', payload: {password, email, history}})
    }

    render(){
        return(
        <div className='wrapper'>
            {this.props.isLoading ? (LoadingPanel):(<div></div>)}
            <div className='Form'>
                <form >
                    <div className='Formlogo'>
                        <img src='http://www.stickpng.com/assets/images/584abf432912007028bd9337.png' alt='Camera'/>
                    </div>
                    <div>
                        <label>PHOTO</label>
                    </div>
                    <div>
                        <input
                        type='text'
                        placeholder= 'Email'
                        className='username'
                        name='email'
                        value={this.state.email}
                        onChange={this.HandleChange.bind(this)}
                        />
                    </div>
                    <div>
                        <input
                        type='password'
                        placeholder='Password'
                        className='password'
                        name='password'
                        onChange={this.HandleChange.bind(this)}
                       />
                    </div>

                    <button  type='button' onClick={this.HandelClick.bind(this)}>Login</button>
                    <div>
                        {/* <a href='#'>Lost your password ?</a> */}
                    </div>
                    <div>
                        <a href='/signup'>Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
        )
    }
};
function mapStateToProps(state) {
    return {
      isLoading:state.auth.isLoading,
      isLogged: state.auth.isLogged,
    };

  }

export default connect(mapStateToProps)(LoginForm);
