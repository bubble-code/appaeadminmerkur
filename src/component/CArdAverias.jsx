import React from "react";
import { Panel, Row, Col, Button } from 'rsuite';

const CardAverias = ({ data }) => {

  return (
    <Panel header={data.salon} collapsible bordered shaded bodyFill style={{ width: 300, marginBottom: 20 }}>
      <p>
        <small>
          {data.subject}
        </small>
      </p>
      <p>
        <small>
          {data.id} {data.date}
        </small>
      </p>
      <Button>Click</Button>
    </Panel>

  )
}
export default CardAverias;