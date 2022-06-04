import React, { useState } from 'react';
import "react-datasheet/lib/react-datasheet.css";
import Datasheet from 'react-datasheet';
import { Col, Divider, Form, Button } from 'antd';




const TableDataRouleta = () => {
  const dataSubmit = [];
  const [value, setValue] = useState({
    grid: [
      [
        { value: "Stations", readOnly: true },
        { value: "In", readOnly: true },
        { value: "Out", readOnly: true },
        { value: "Profit", readOnly: true },
        { value: "Stake", readOnly: true },
        { value: "Win", readOnly: true },
        { value: "Dif", readOnly: true }
      ],
      [
        { readOnly: true, value: "St1" },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      [
        { readOnly: true, value: "St2" },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      [
        { readOnly: true, value: "St3" },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      [
        { readOnly: true, value: "St4" },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      [
        { readOnly: true, value: "St5" },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      [
        { readOnly: true, value: "St6" },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      [
        { readOnly: true, value: "St7" },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      [
        { readOnly: true, value: "St8" },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      [
        { readOnly: true, value: "St9" },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      [
        { readOnly: true, value: "St10" },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
    ]
  }
  );
  const datashow = value.grid.slice(0, 9);
  const copyTable = () => {
    const table = document.querySelector('.myTable');
    const row = [...table.querySelectorAll('tr')];
    const head = Array.from(row.shift().childNodes);
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
    console.log(dataSubmit);
  }
  const onCellsChanged = changes => {
    const grid = value.grid;
    // handleCopyTable();
    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });
    setValue({ grid });
  }
  const renderValues = (cell, i, j) => {
    if (j === 3 && cell.value !== "Profit") {
      return (parseFloat(value.grid[i][1].value) + parseFloat(value.grid[i][2].value));
    }
    else if (j === 6 && cell.value !== "Dif") {
      return (parseFloat(value.grid[i][4].value) + parseFloat(value.grid[i][5].value));
    }
    else {
      return cell.value;
    }
  }

  return (

    <Col span={8} className="gutter-row" offset={1}>
      <Divider orientation="left" style={{ border: 'black' }}>Apuestas Beneficios </Divider>
      <Form >
        <div className="sheet-container">
          <Datasheet data={datashow} valueRenderer={renderValues} onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null} onCellsChanged={onCellsChanged} className="myTable" />
        </div>
        <Button type="primary" htmlType="button" onClick={() => copyTable()} style={{ alignItems: "flex-end" }}>
          Submit
        </Button>
      </Form>
    </Col>
  )
}

export default TableDataRouleta;