import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import Table from '../Table';
import orderBy from "lodash/orderBy";

import {toTitleCase} from '../../Helpers/toTitleCase'

class TableComponent extends Component {

  state = {
    data: [],
    filter: toTitleCase(this.props.location.pathname.replace('/', '')),
    direction: "asc"
  }

  componentDidMount() {
    const csvFilePath = require('../../data/cities.csv')
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: this.getData
    }); 
  }

  getData = (result) => {
    this.setState({data: result.data});
  }

  changeDirection = (e) => {
    this.setState({direction: e.target.value})
  }

  render() {
    const {data, filter, direction} = this.state
    return(
      <React.Fragment>
        <div className="row" style={{marginTop: "20px"}}>
          <Link className="btn btn-outline-primary btn-sm mr-3" to="/">Home</Link>
          <button className={`btn btn-outline-primary btn-sm mr-3 ${direction === 'asc' && 'active'}`} value='asc' onClick={this.changeDirection} >Sort: Ascending</button>
          <button className={`btn btn-outline-primary btn-sm mr-3 ${direction === 'desc' && 'active'}`} value='desc' onClick={this.changeDirection}>Sort: Descending</button>
        </div>
        <div className="row">
          <h3 style={{marginTop: "20px"}}>{`Table has been ordered by ${filter}`}</h3>
          <Table tableData={data.length > 0 && orderBy(data, filter, direction)} filter={filter} />
        </div>
      </React.Fragment>
    )
  }
}

export default TableComponent