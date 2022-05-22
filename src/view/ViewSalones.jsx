import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Grid, Panel, Row } from 'rsuite';
import { listComunidades, listSalonesComunidad } from '../app/actions/actions';
import GoogleMapReact from "google-map-react";

export const ViewSalones = () => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState();
  const comunidades = useSelector((state) => state.comunidades);
  const salones = useSelector((state) => state.salones)
  const arr = comunidades["comunidades"];
  let arrSalones = salones['salones'];
  const coordinates = { lat: 0, lng: 0 };
  useEffect(() => {
    dispatch(listComunidades());
  }, []);
  const getSalones = (comunidad) => {
    dispatch(listSalonesComunidad(comunidad))
    arrSalones = [];
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
      <Col xs={6}>
        <Panel bordered style={{height:'85vh', width:'700px', background:'grey'}}>
          <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyBTg_3jO5k-Hhb1vesjfgkOZq1gBJ0zSps' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={''}
            onChildClick={''}
          >

          </GoogleMapReact>
        </Panel>
      </Col>
    </Grid>
  </>)
}