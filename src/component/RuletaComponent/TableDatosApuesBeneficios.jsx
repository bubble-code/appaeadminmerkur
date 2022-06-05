import React, { useState } from 'react';
import "react-datasheet/lib/react-datasheet.css";
import Datasheet from 'react-datasheet';
import { Col, Divider, Form, Button } from 'antd';
import { useEffect } from 'react';



const TableDataRouleta = ({ datashow, setDataGrid, halls }) => {
  const dataSubmit = [];
  const resetTable = () => {
    const grid = datashow.slice(0);
    for (let i = 1; i < datashow.length; i++) {
      for (let j = 1; j < datashow[i].length; j++) {
        grid[i][j].value = 0;
      }
    }
    setDataGrid(grid);
  }
  const copyTable = () => {
    const table = document.querySelector('.myTable');
    const row = [...table.querySelectorAll('tr')];
    for (let i = 0; i < row.length; i++) {
      let col = [...row[i].querySelectorAll('td')];
      let St = col[0].innerText;
      let In = col[1].innerText;
      let Out = col[2].innerText;
      let Profit = col[3].innerText;
      let Stake = col[4].innerText;
      let Win = col[5].innerText;
      let Dif = col[6].innerText;
      dataSubmit.push({ St, In, Out, Profit, Stake, Win, Dif });
    }
    resetTable();
    console.log(dataSubmit);
  }
  const onCellsChanged = changes => {
    const grid = datashow.slice(0);
    let total = 0;
    changes.forEach(({ cell, row, col, value }) => {
      grid[grid.length - 1][col].value = 0;
      grid[row][col] = { ...grid[row][col], value };
      for (let i = 1; i <= grid.length - 1; i++) {
        total += parseFloat(grid[i][col].value);
      }
      grid[grid.length - 1][col].value = total
    });
    setDataGrid(grid);
  }
  const renderValues = (cell, i, j) => {
    if (j === 3 && cell.value !== "Profit") {
      return (parseFloat(datashow[i][1].value) - parseFloat(datashow[i][2].value));
    }
    else if (j === 6 && cell.value !== "Dif") {
      return (parseFloat(datashow[i][4].value) - parseFloat(datashow[i][5].value));
    }
    else {
      return cell.value;
    }
  }

  return (

    <Col span={8} className="gutter-row" offset={0}>
      <Divider orientation="left" style={{ border: 'black' }}>{halls} Contadores </Divider>
      <div className="sheet-container">
        <Datasheet data={datashow} valueRenderer={renderValues} onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null} onCellsChanged={onCellsChanged} className="myTable" />
      </div>
      <Button type="primary" htmlType="button" onClick={() => copyTable()} style={{ alignItems: "flex-end" }}>
        Submit
      </Button>
    </Col>
  )
}

export default TableDataRouleta;