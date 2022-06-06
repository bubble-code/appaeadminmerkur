import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDataRoulete } from '../../app/actions/actions';
import "react-datasheet/lib/react-datasheet.css";
import Datasheet from 'react-datasheet';
import { Col, Divider, Card, Button, Statistic, Row, Space, DatePicker } from 'antd';



const TableDataRouleta = ({ datashow, setDataGrid, halls, setDate, date }) => {
  const [porcentajeInOut, setPorcentajeInOut] = useState(0);
  const [porceBetProfit, setPorceBetProfit] = useState(0);
  const dispatch = useDispatch();
  const dataRoulette = [];
  const resetTable = () => {
    const grid = datashow.slice(0);
    for (let i = 1; i < datashow.length; i++) {
      for (let j = 1; j < datashow[i].length; j++) {
        grid[i][j].value = 0;
      }
    }
    setDataGrid(grid);
    setPorcentajeInOut(0);
    setPorceBetProfit(0);
    setDate("");
  }
  const saveData = () => {
    const table = document.querySelector('.myTable');
    const row = [...table.querySelectorAll('tr')];
    for (let i = 1; i < row.length - 1; i++) {
      let col = [...row[i].querySelectorAll('td')];
      let St = col[0].innerText;
      let In = col[1].innerText;
      let Out = col[2].innerText;
      let Profit = col[3].innerText;
      let Stake = col[4].innerText;
      let Win = col[5].innerText;
      let Dif = col[6].innerText;
      dataRoulette.push({ St, In, Out, Profit, Stake, Win, Dif });
    }
    resetTable();
    dispatch(addDataRoulete({ halls, dataRoulette }));
    // console.log(dataSubmit);
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
    let temPorceInOut = parseFloat((parseFloat(grid[grid.length - 1][2].value) / parseFloat(grid[grid.length - 1][1].value)) * 100);
    let temPorceBetProfit = parseFloat((parseFloat(grid[grid.length - 1][5].value) / parseFloat(grid[grid.length - 1][4].value)) * 100);
    setPorcentajeInOut(temPorceInOut);
    setPorceBetProfit(temPorceBetProfit);
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
      <Space direction="vertical" style={{ width: '220px' }}>
        <span> Fecha:
          <DatePicker onChange={value => { setDate(value) }} value={date} placeholder='Seleccione la fecha' />
        </span>
      </Space>
      <div className="sheet-container">
        <Datasheet data={datashow} valueRenderer={renderValues} onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null} onCellsChanged={onCellsChanged} className="myTable" />
      </div>
      <Row gutter={{ xs: 26, sm: 26, md: 26, lg: 32 }} style={{ width: '400px' }}>
        <Col >
          <Card style={{ marginTop: '10px' }}>
            <Statistic
              title="Porcentaje In/Out"
              value={porcentajeInOut}
              precision={2}
              valueStyle={{
                color: '#3f8600',
              }}
              // prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col >
          < Card style={{ marginTop: '10px' }} >
            <Statistic
              title="Apuestas/Beneficios"
              value={porceBetProfit}
              precision={2}
              valueStyle={{
                color: '#cf1322',
              }}
              // prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col >
          <Button type="primary" htmlType="button" onClick={() => saveData()} style={{ marginTop: '50px' }}>
            Submit
          </Button>
        </Col>
      </Row>
    </Col>
  )
}

export default TableDataRouleta;