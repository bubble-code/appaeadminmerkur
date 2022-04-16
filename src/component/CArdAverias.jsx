import React from "react";
import { Panel, Row, Col, Button } from 'rsuite';

const CardSalones = ({ id }) => {

  return (
    <Col md={6} sm={12} >
      <Panel header={id} bordered shaded bodyFill style={{ width: 300, marginBottom: 20 }}>
        <p>
          <small>
            A suite of React components, sensible UI design, and a friendly development experience.
          </small>
        </p>
        <Button>Click</Button>
      </Panel>
    </Col>
  )
}
export default CardSalones;