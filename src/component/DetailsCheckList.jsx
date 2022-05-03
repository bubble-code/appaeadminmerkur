import React from "react";
import { Link } from 'react-router-dom'

const DetailsCheckList = ({ activeCheckList }) => {

  return <div className="col-md-6">
    {activeCheckList ?
      (
        <div>
          <h4>Current CheckList</h4>
          <div>
            <label>
              <strong>Comunidad:</strong>
            </label>{" "}
            {activeCheckList.comunidad}
          </div>
          <div>
            <label>
              <strong>Fecha final:</strong>
            </label>{" "}
            {activeCheckList.fecha}
          </div>
          <div>
            <label>
              <strong>Prioridad:</strong>
            </label>{" "}
            {activeCheckList.prioridad}
          </div>
          <div>
            <label>
              <strong>Detalles:</strong>
            </label>{" "}
            {activeCheckList.detalles}
          </div>
          <Link
            to={"/tutorials/" + activeCheckList.id}
            className="badge badge-warning"
          >
            Edit
          </Link>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
  </div>

};

export default DetailsCheckList;