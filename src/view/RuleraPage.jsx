import React, { useState, CSSProperties } from 'react';
import ReactDataSheet from 'react-datasheet';
import "react-datasheet/lib/react-datasheet.css";
import Datasheet from 'react-datasheet';
import { Row } from 'antd';
import MenuLeftRouleta from '../component/RuletaComponent/MenuLeft'
import TableBettingProfits from '../component/RuletaComponent/TableDatosApuesBeneficios';
import "../styles/StyleDivTable.css";




const RuletaDataSheett = () => {

  return (<>
    <Row gutter={{ xs: 16, sm: 16, md: 24, lg: 32 }} >
      <MenuLeftRouleta />
      <TableBettingProfits />
    </Row>
  </>
  )
}

export default RuletaDataSheett;