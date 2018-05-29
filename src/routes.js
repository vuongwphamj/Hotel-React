import React from 'react';
import { 
    // BrowserRouter as Router,
    Route,
    // Link,
    Switch,
} from 'react-router-dom';

import App from './components/App/App';
// import Auth from './modules/Auth';
// import Login from './modules/Auth/pages/Login/LoginPage';
// import SignUp from './modules/Auth/pages/SignUp/SignUpPage';
// import ChangePassWord from './modules/Auth/pages/ChangePassWord/ChangePassWordPage';

// import Home from './modules/Home';
// import ListModel from './modules/Home/pages/ListModel/ListModelPage';
// import AddModel from './modules/Home/pages/AddModel/AddModelPage';
// import DeleteModel from './modules/Home/pages/DeleteModel/DeleteModelPage';
// import UpdateModel from './modules/Home/pages/UpdateModel/UpdateModelPage';
// import UserInfor from './modules/Home/pages/UserInfor/UserInfor';

// import NotFound from './components/NotFound/index';
// import notRequireAuth from './util/notRequireAuth';
// import requireAuth from './util/requireAuth';

export default (
    <Switch>
        
        <Route component={App}>
            {/* <IndexRedirect to='/auth' />
            <Route path="/auth" component={notRequireAuth(Auth)}>
            <IndexRoute component={Login} />
            <Route path="/auth/login" component={Login}/>
            <Route path="/auth/signup" component={SignUp}/>
            <Route path="/auth/changepwd" component={ChangePassWord}/>
            </Route>
            <Route path="/home" component={requireAuth(Home)}>
                <IndexRoute component={ListModel} />
                <Route path="/home/listmodel" component={ListModel}/>
                <Route path="/home/deletemodel/:model3dId" component={DeleteModel}/>
                <Route path="/home/addmodel" component={AddModel}/>
                <Route path="/home/updatemodel/:model3dId" component={UpdateModel}/>
                <Route path="/home/userinfor" component={UserInfor}/>
            </Route> */}
        </Route>
    </Switch>
);