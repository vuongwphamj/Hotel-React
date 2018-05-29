import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import './MenuLeftShow.css';
// import LeftIcon from './img/left.png';
import { Glyphicon  } from 'react-bootstrap';

export class MenuLeftShow extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    return (
      <Drawer
        open={this.props.open}
      >
          <div
            className ='backgroundMenuShow'
          >
              <div
                className='MenuShowMain'
              >

                  <div  className='avatar'>
                    <div style={{width:'180px', height: '180px', margin: '0 auto'}}>
                      <img
                          style={{width:'180px', height: '180px'}}
                          src='https://cdn.shopify.com/s/files/1/0455/4269/products/9c482f05-0e54-43b4-b045-70841b4c33f2.jpg?v=1514654019'
                      />
                    </div>
                    <div className='avatarUsername'>
                        <h4 style={{marginTop:'calc(50% - 20px)'}}>Hello! {this.props.user.username}.</h4>
                    </div>
                  </div>

                  <div>
                    <Link to="/home/userinfor" >
                      <button
                        onClick={this.props.handleToggle}
                        className='buttonMenuLeftDraw'
                      >
                        <Glyphicon glyph='user' style={{marginRight: '20px'}} />User Information
                      </button>
                    </Link>
                    <Link to="/home/listmodel" >
                      <button
                        onClick={this.props.handleToggle}
                        className='buttonMenuLeftDraw'
                      >
                        <Glyphicon glyph='th-list' style={{marginRight: '20px'}} />List Model
                      </button>
                    </Link>
                    <Link to="/home/addmodel" >
                      <button
                        onClick={this.props.handleToggle}
                        className='buttonMenuLeftDraw'
                      >
                        <Glyphicon glyph='open' style={{marginRight: '20px'}} />Upload Model
                      </button>
                    </Link>

                    <Link to="#" >
                      <div
                        onClick = {this.props.handleSignOut}
                        className = 'buttonUser'
                      >
                        <Glyphicon glyph='off' style={{marginRight: '20px'}} />Sign Out
                      </div>
                    </Link>


                  </div>
              </div>

              <a href='#'>
                <div
                  onClick={this.props.handleToggle}
                  className='buttonMenuLeft'
                >
                  <Glyphicon glyph='chevron-left' style={{fontSize:'15px', marginTop: 'calc(50vh - 15px)'}} />
                </div>
              </a>


          </div>
      </Drawer>
    );
  }
}

MenuLeftShow.contextTypes = {
  router: PropTypes.object,
};

MenuLeftShow.propTypes = {
};

// export default MenuLeftShow;

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    user: store.home.user
  };
}

export default connect(mapStateToProps)(MenuLeftShow);
