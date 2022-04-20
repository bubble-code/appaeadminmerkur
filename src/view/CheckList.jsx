import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { lisTareas, listAveriasSalon } from '../app/actions/actions'
import { Row, Col, Panel, Grid } from 'rsuite';
import FormAddCheckList from '../component/FormAddChecklist';
import CardCheckList from '../component/CardCheckList';

const ChecklistView = () => {
  const dispatch = useDispatch();
  const listTarea = useSelector((state) => state.checklist);
  // console.log(listTarea)
  useEffect(() => {
    dispatch(lisTareas());
  }, []);

  // const listCheck = [];
  // const ll = listTarea["checklist"].map(eee => {
  //   console.log(eee.id)
  // })

  return <Grid fluid>
    <Row classname="show-grid">
      <Row style={{ height: 70 }}></Row>
      <Col xs={16}  >
        <Panel bordered shaded>
          <CardCheckList />
        </Panel>
      </Col >
      <Col xs={6} xsPush={1}>
        <FormAddCheckList />
      </Col>
    </Row>
  </Grid>
}

export default ChecklistView;