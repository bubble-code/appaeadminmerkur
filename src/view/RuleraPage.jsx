import React, { useState, CSSProperties } from 'react';
import ReactDataSheet from 'react-datasheet';
import "react-datasheet/lib/react-datasheet.css";
import Datasheet from 'react-datasheet';
import { Row, Col, Divider } from 'antd';
import "../styles/StyleDivTable.css";




const RuletaDataSheett = () => {
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
        { value: 1 },
        { value: 3 },
        { value: 0 },
        { value: 3 },
        { value: 3 },
        { value: 3 },
      ],
      [
        { readOnly: true, value: "St2" },
        { value: 2 },
        { value: 4 },
        { value: 0 },
        { value: 4 },
        { value: 4 },
        { value: 4 },
      ],
      [
        { readOnly: true, value: "St3" },
        { value: 1 },
        { value: 3 },
        { value: 0 },
        { value: 3 },
        { value: 3 },
        { value: 3 },
      ],
      [
        { readOnly: true, value: 4 },
        { value: 2 },
        { value: 4 },
        { value: 4 },
        { value: 4 },
        { value: 4 },
        { value: 4 },
      ]
    ]
  }
  );
  const onCellsChanged = changes => {
    const grid = value.grid;
    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });
    setValue({ grid });
  }
  const renderValues = (cell, i, j) => {
    return j === 3 ? (parseFloat(value.grid[i][1].value) + parseFloat(value.grid[i][2].value)) : j === 6 ? (parseFloat(value.grid[i][4].value) + parseFloat(value.grid[i][5].value)) : cell.value;
  }

  return (
    <Row gutter={{ xs: 16, sm: 16, md: 24, lg: 32 }}>
      <Col span={8} className="gutter-row">
        <Divider orientation="left">Datos de Ruleta </Divider>
        <div className="sheet-container">
          <Datasheet data={value.grid} valueRenderer={renderValues} onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null} onCellsChanged={onCellsChanged} />
        </div>
      </Col>
    </Row>
  )
}

export default RuletaDataSheett;