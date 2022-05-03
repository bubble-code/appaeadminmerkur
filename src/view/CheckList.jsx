import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { lisTareas, listAveriasSalon } from '../app/actions/actions'
import { Row, Col, Panel, Grid } from 'rsuite';
import FormAddCheckList from '../component/FormAddChecklist';
import CardCheckList from '../component/CardCheckList';
import DetailsCheckList from '../component/DetailsCheckList'

const ChecklistView = () => {
  const dispatch = useDispatch();
  const [activeCheckList, SetActiveCheckList] = useState();
  // const listTarea = useSelector((state) => state.checklist);
  // console.log(listTarea)
  useEffect(() => {
    dispatch(lisTareas());
  }, []);
  const activeCheck = (ele) => {
    SetActiveCheckList({
      comunidad: ele.comunidad,
      prioridad: ele.prioridad,
      fecha: ele.fecha,
      detalles: ele.detalles,
    })
  }
  // const listCheck = [];
  // const ll = listTarea["checklist"].map(eee => {
  //   console.log(eee["fecha"])
  // })

  return <Grid fluid>
    <Row classname="show-grid">
      <Row style={{ height: 70 }}></Row>
      <Col xs={10}  >
        <Panel bordered shaded>
          <CardCheckList activeCheck={activeCheck} />
        </Panel>
      </Col >
      <Col xs={6}>
        <Panel bordered shaded>
          <DetailsCheckList activeCheckList={activeCheckList} />
        </Panel>
      </Col>
      <Col xs={6} xsPush={1}>
        <FormAddCheckList />
      </Col>
    </Row>
  </Grid>
}

export default ChecklistView;