import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Panel } from 'rsuite'



const CardCheckList = ({ activeCheck }) => {
  const arr = useSelector((state) => state.checklist);
  const [currentIndex, setCurrentIndex] = useState();
  const aarr = arr["checklist"];
  return (<>
    {aarr && aarr.map((item, index) => (
      <Panel bordered aria-setsize={4} className={index === currentIndex ? "active" : ""}
        style={{ background: (index === currentIndex ? "blue" : "white") }}
        onClick={() => {
          activeCheck(item);
          setCurrentIndex(index);
        }}
      >
        <div>{item["detalles"]}</div>
      </Panel>
    )
    )}
  </>)

}

export default CardCheckList;