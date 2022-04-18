import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Panel, Row } from 'rsuite';
import CardSalones from '../component/CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { listSalonesComunidad } from '../app/actions/actions'



const SalonesView = () => {
  const par = useParams()
  const [salons, setSalons] = useState([]);
  const dispatch = useDispatch()
  const salonesList = useSelector((state) => state.salones);
  useEffect(() => {
    dispatch(listSalonesComunidad(par["id"]));
  }, [par]);
  const list = salonesList["salones"].map((el) => (
    <CardSalones key={el["id"]} id={el["id"]} />
  ))
  return <Panel bordered header={par["id"]}>
    <Row>
      {list}
    </Row>
  </Panel>
}

// const instance = (
//   <Row>
//     <Col md={6} sm={12}>
//       <Card />
//     </Col>
//     <Col md={6} sm={12}>
//       <Card />
//     </Col>
//     <Col md={6} sm={12}>
//       <Card />
//     </Col>
//     <Col md={6} sm={12}>
//       <Card />
//     </Col>
//   </Row>
// );

export default SalonesView;