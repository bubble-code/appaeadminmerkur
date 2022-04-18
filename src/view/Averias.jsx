import React, { useEffect } from "react"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listAveriasSalon } from '../app/actions/actions'
import { Panel, Row } from 'rsuite'
import CardAverias from '../component/CArdAverias';
import GridAverias from '../component/GridAverias';

const AveriasView = () => {

  const par = useParams()
  const dispatch = useDispatch()
  const salonesList = useSelector((state) => state.salones);
  useEffect(() => {
    dispatch(listAveriasSalon(par["id"]));
  }, [par]);


  const listAveriaSalon = [];
  // salonesList["salones"].map(e => {
  //   const name = e.salon;
  //   if (!listAveriaSalon[name])
  //     listAveriaSalon[name] = [];
  //   listAveriaSalon[name].push(e);
  // }
  // )
  for (const data of salonesList["salones"]) {
    if (!listAveriaSalon[data.salon])
      listAveriaSalon[data.salon] = [];
    listAveriaSalon[data.salon].push(data);
  }
  const list = salonesList["salones"].map((el) => {
    return <CardAverias data={el} />;
  })
  const text = `Averias de ${par["id"]} ${list.length}`
  return <Panel bordered header={text}>
    <Row>
      {/* {list} */}
    </Row>
    <Row>
      <GridAverias lists={listAveriaSalon} />
    </Row>
  </Panel>
}

export default AveriasView;