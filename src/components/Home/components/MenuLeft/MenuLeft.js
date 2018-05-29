import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './MenuLeft.css';

// import PenIcon from './img/pen.png';
import ListIcon from './img/list.png';
import { Glyphicon  } from 'react-bootstrap';
import Popover from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';

export class MenuLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
    };
  }
  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render(){
    return (
      <div className='leftMenu'>
          <div onClick={this.props.handleToggle} className='leftAvatar'>
            <div style={{width:'35px', height: '35px', margin: 'auto auto'}}>
              <img
                  style={{width:'35px', height: '35px' , borderRadius: '50%'}}
                  src='https://www.pokecommunity.com/customavatars/avatar657325_1.gif'
              />
            </div>
          </div>
          <Link to='/home/listmodel'>
            <div className='leftMenuButton' style={{width: '100%', height: '40px', padding: '10px'}}>
              <div style={{width:'20px', height: '20px', margin: 'auto auto'}}>
                <img
                    style={{width:'20px', height: '20px'}}
                    src={ListIcon}
                />
              </div>
            </div>
          </Link>
          <Link to='/home/addmodel'>
            <div className='leftMenuButton' style={{width: '100%', height: '40px', padding: '10px'}}>
              <div style={{width:'20px', height: '20px', margin: 'auto auto'}}>
                <img
                    style={{width:'20px', height: '20px'}}
                    src='https://cdn0.iconfinder.com/data/icons/pixon-1/24/arrow_up_upload-512.png'
                />
              </div>
            </div>
          </Link>

          {/* <div className='leftMenuButton} style={{width: '100%', height: '40px', padding: '10px'}}>
            <div style={{width:'20px', height: '20px', margin: 'auto auto'}}>
              <img
                  style={{width:'20px', height: '20px'}}
                  src={PenIcon}
              />
            </div>
          </div> */}

          <Link to=''>
            <div onClick={this.handleClick} className='leftMenuButtonUser' style={{width: '100%', height: '40px', padding: '10px'}}>
              <div style={{width:'20px', height: '20px', margin: 'auto auto'}}>
                <Glyphicon style={{fontSize: '20px'}}  glyph="user" />

              </div>
            </div>
          </Link>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{"horizontal":"right","vertical":"center"}}
            targetOrigin={{"horizontal":"middle","vertical":"bottom"}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem
                onClick={this.props.handleSignOut}
                style={{padding: '15px'}}
                primaryText="Sign Out"
              />
            </Menu>
          </Popover>


      </div>
    );
  }
}

MenuLeft.propTypes = {
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
  };
}

export default connect(mapStateToProps)(MenuLeft);

