import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './ListModel.css'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TableFooter from 'material-ui/Table/TableFooter';

export class ListModelPage extends Component {
  constructor(props){
    super(props)
    this.handleDowload=this.handleDowload.bind(this);
  }

  componentWillMount(){
    var history = this.props.history;
    this.props.dispatch({type:'GET_LIST_MODEL', history: history});
  }
  handleDowload(e){
    e.preventDefault();
    let modelId = e.target.name;
    // console.log(modelId);
    var history = this.props.history;
    this.props.dispatch({type: 'DOWNLOAD_MODEL', modelId: modelId, history: history});
  }
  render() {
    return (
      <div>
      {/* <h1>{this.this.listmodel[0].name}</h1> */}
      <Table
        fixedHeader={true}
        fixedFooter={true}
        selectable={true}
        multiSelectable={false}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn colSpan="6" tooltip="List Model 3d AR" style={{textAlign: 'center'}}>
                <h1>List Model 3D AR</h1>
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Discription">Discription</TableHeaderColumn>
            <TableHeaderColumn tooltip="Create Date">Create</TableHeaderColumn>
            <TableHeaderColumn tooltip="Update Date">Update</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Option">Options</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          deselectOnClickaway={true}
          showRowHover={true}
          stripedRows={false}
        >
          {this.props.listmodel.map( (row, index) => (
            <TableRow key={index}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.description}</TableRowColumn>
              <TableRowColumn>{row.createDate}</TableRowColumn>
              <TableRowColumn>{row.updateDate}</TableRowColumn>
              <TableRowColumn>
                <Link to={`/home/updatemodel/${row._id}`} >Edit</Link> |
                <Link to={`/home/deletemodel/${row._id}`} >Delete</Link> |
                <Link to="#"  >
                  <button onClick={this.handleDowload} name={row._id}>Dowload</button>
                </Link>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Discription">Discription</TableHeaderColumn>
            <TableHeaderColumn tooltip="Create Date">Create</TableHeaderColumn>
            <TableHeaderColumn tooltip="Update Date">Update</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Option">Options</TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn colSpan="6" style={{textAlign: 'center'}}>
              List Model 3d AR
            </TableRowColumn>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    );
  }
}

ListModelPage.propTypes = {
  // children: PropTypes.object.isRequired
  listmodel: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    updateDate: PropTypes.string.isRequired,
    createDate: PropTypes.string.isRequired,
  }))
};

// Retrieve data from store as props
function mapStateToProps(store) {

  return {
    listmodel: store.home.listmodel
  };
}

export default connect(mapStateToProps)(ListModelPage);
