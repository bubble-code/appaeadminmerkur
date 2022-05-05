import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Grid, Panel, Row } from 'rsuite';
import { listComunidades, listSalonesComunidad } from '../app/actions/actions'

export const ViewSalones = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState();
  const comunidades = useSelector((state) => state.comunidades);
  const salones = useSelector((state) => state.salones)
  const arr = comunidades["comunidades"];
  const arrSalones = salones['salones']
  useEffect(() => {
    dispatch(listComunidades());
  }, []);
  const getSalones = (comunidad) => {
    dispatch(listSalonesComunidad(comunidad))
  }
  return (<>
    <Grid fluid>
      <Col xs={4}>
        <Row>
          <Col>
            {arr && arr.map((item, index) => (
              <Panel bordered aria-setsize={4} style={{ background: (index === currentIndex ? "blue" : "white") }} onClick={() => {
                setCurrentIndex(index);
                getSalones(item['data']);
              }} className={index === currentIndex ? "active" : ""}>
                <div>{item['data']}</div>
              </Panel>
            ))}
          </Col>
        </Row>
      </Col>
      <Col xs={6}>
        {arrSalones && arrSalones.map((item, index) => (
          <Panel bordered aria-setsize={4} style={{ background: "grey" }} onClick={() => { }}>
            <div>{item["id"]}</div>
          </Panel>
        ))}

      </Col>
    </Grid>
  </>)
}