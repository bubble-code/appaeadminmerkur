import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import MenuLeftRouleta from '../component/RuletaComponent/MenuLeft'
import TableBettingProfits from '../component/RuletaComponent/TableDatosApuesBeneficios';
import { Grafico } from '../component/RuletaComponent/Grafico'
import "react-datasheet/lib/react-datasheet.css";
import "../styles/StyleDivTable.css";

const halls = [
  { salon: "Alcobendas", roulet: 8 },
  { salon: "Alcala 260", roulet: 8 },
  { salon: "Alcala 610", roulet: 8 },
  { salon: "Mejorada", roulet: 6 },
  { salon: "Carabanchel", roulet: 8 },
  { salon: "Oca 22", roulet: 8 },
  { salon: "Villanueva", roulet: 8 },
  { salon: "Tropicana", roulet: 10 },
  { salon: "Tropicana", roulet: 6 },
  { salon: "Fortuna", roulet: 8 },
  { salon: "Riviera", roulet: 8 },
  { salon: "Malibu", roulet: 8 },
  { salon: "Cancun", roulet: 10 },
  { salon: "Santander", roulet: 8 },
  { salon: "Santoña", roulet: 8 },
  { salon: "Torrelavega", roulet: 8 },
  { salon: "Alsasua", roulet: 10 },
  { salon: "Olite", roulet: 10 },
  { salon: "Tudela", roulet: 8 },
  { salon: "Mendevaldea", roulet: 8 }];
const grid = [
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


const RuletaDataSheett = () => {
  const [selectedKey, setSelectedKey] = useState();
  const [dataGrid, setDataGrid] = useState({ grid: [] });

  useEffect(() => {
    if (selectedKey) {
      let data = grid.slice(0, halls[selectedKey - 1].roulet + 1);
      data.push([{ value: "Total", readOnly: true },
      { value: 0, readOnly: true },
      { value: 0, readOnly: true },
      { value: 0, readOnly: true },
      { value: 0, readOnly: true },
      { value: 0, readOnly: true },
      { value: 0, readOnly: true }]);
      setDataGrid({ grid: data })
    } else
      setDataGrid({ grid: [] });
  }, [selectedKey]);
  const updateDataGrid = (grid) => {
    setDataGrid({ grid });
  }
  return (
    <Row>
      <Col span={5} className="gutter-row" offset={0} >
        <MenuLeftRouleta setSelectedKey={setSelectedKey} />
      </Col>
      <Col>
        <Row gutter={{ xs: 20, sm: 20, md: 20, lg: 26 }} style={{width:'750px'}} >
          <Col style={{width:'190px'}}>
            {selectedKey ? <TableBettingProfits datashow={dataGrid.grid} halls={halls[selectedKey - 1].salon} setDataGrid={updateDataGrid} /> : <></>}
          </Col>
          <Col style={{width:'170px'}} offset={10} >
            {selectedKey ? <Grafico arrayData={dataGrid.grid} tituloGrafico={"Entradas / Salidas"} label1={"Entradas"} label2={"Salidas"} index1={1} index2={2} /> : <></>}
            {selectedKey ? <Grafico arrayData={dataGrid.grid} tituloGrafico={"Apuestas / Beneficios"} label1={"Apuestas"} label2={"Beneficios"} index1={4} index2={5} /> : <></>}
          </Col>
        </Row>
        <Row gutter={{ xs: 20, sm: 20, md: 20, lg: 26 }} >
          <Col span={8} className="gutter-row" offset={0}>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default RuletaDataSheett;