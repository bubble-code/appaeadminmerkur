import React from "react";
import { Panel, Col, Button } from 'rsuite';
import CardAverias from './CArdAverias'

const GridAverias = ({ lists }) => {
  const tt = [];
  for (const ite in lists) {
    tt.push(<ListaCard salon={ite} key={ite} lis={lists[ite]} />)

  }
  // lists.forEach((el,ind,arr) => {
  console.log(tt);
  //   console.log(el);
  // },this)


  // console.log(lists["Mejorada del campo"])

  // const list = lists.map((item) => (
  //   <ListaCard salon={item.salon} lis={item} />

  // ))
  return (
    // <Col md={6} sm={12} >
    //   <Panel header={id} bordered shaded bodyFill style={{ width: 300, marginBottom: 20 }}>
    //     <p>
    //       <small>
    //         A suite of React components, sensible UI design, and a friendly development experience.
    //       </small>
    //     </p>
    //     <Button>Click</Button>
    //   </Panel>
    // </Col>
    <div>
      {tt}

    </div>
  );
}


const ListaCard = ({ salon, lis }) => {
  const text = `${salon}  ${lis.length}`
  const te = lis.map(etem => {
    return <div>
      <p>
        <small>
          {etem.id} {etem.date}
        </small>
        <small>
          {etem.subject}
        </small>
      </p>
    </div>
  })
  return <Panel header={text} collapsible bordered shaded bodyFill style={{ width: 300, marginBottom: 20 }}>
    {te}

    <Button>Click</Button>
  </Panel>
}
export default GridAverias;