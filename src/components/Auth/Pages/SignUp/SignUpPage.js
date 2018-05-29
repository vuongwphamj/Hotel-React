import React from 'react'
import {connect} from 'react-redux'
import './SignUp.css' 
import LoadingPanel from '../LoadingPanel/LoadingPanel'
// import { browserHistory } from 'react-router'
// import createHistory from "history/createBrowserHistory"
// const history = createHistory()

class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state={username:'',password:'',email:'',isSignUp:false,isLoading:false};
        this.HandleClick = this.HandleClick.bind(this);
        this.HandleChange=this.HandleChange.bind(this);
    }
    HandleChange(e){
        console.log(this.state);
        this.setState({[e.target.name]:e.target.value});
    }
   
    HandleClick(e){
        var username=this.state.username;
        var pass=this.state.password;
        var mail=this.state.email;
        var history = this.props.history;
        this.props.dispatch({type:'SIGNUP',payload:{username, pass, mail, history}})
        this.props.isSignUp? ()=>{history.push('/auth/login')}:()=>{};
    
    }
    render(){
        return(
            <div className='wrapper'>
            {this.props.isLoading ? (LoadingPanel):(<div></div>)}
            <div className='Form'>
                <form>
                    <div className='FormPanel'>
                        <label>
                            SIGN UP TO UP LOAD YOUR PHOTO
                        </label>
                    </div>
                    <div>
                        <input 
                            className='username' 
                            type='text' 
                            placeholder='username'
                            name='username'
                            onChange={this.HandleChange}/>
                    </div>
                    <div>
                        <input 
                        className='password'
                        type='password' 
                        placeholder='password'
                        name='password' 
                        onChange={this.HandleChange}/>
                    </div>
                    <div>
                        <input 
                        className='email'
                        type='email' 
                        placeholder='email'
                        name='email'
                        onChange={this.HandleChange}/>
                    </div>
                    <button type='button' onClick={this.HandleClick}>SIGN UP</button>
                    <div>
                        <a href='/login'>Sign In</a>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      isSignUp: state.auth.isSignUp,
      isLoading:state.auth.isLoading
    };
    
  };
export default connect(mapStateToProps)(SignUpForm);
