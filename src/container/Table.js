import React from 'react';

const Table = (props) => {
  const {tableData, filter} = props

  const tableHeaders = (
    <thead >
      <tr>
        {tableData && Object.keys(tableData[0]).map((column, idx) => {
          return <th key={`head${idx}`} style={{backgroundColor: `${column === filter && '#42b9f4'}`}} >{column}</th>
        })}
      </tr>
    </thead>
  );

  const tableRows = tableData && tableData.map(row => {
    return (
      <tr>
        {Object.keys(tableData[0]).map((column, idx) => {
          return (
            <td key={`row${idx}`}>{row[column]}</td>
          )
        })}
      </tr>
    )
  })

  return (
    <table className="table">
      {tableHeaders}
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}

export default Table;
