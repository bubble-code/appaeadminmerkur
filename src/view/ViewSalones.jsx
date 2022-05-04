import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Panel, Row } from 'rsuite';
import { listComunidades } from '../app/actions/actions'

export const ViewSalones = () => {
  const dispatch = useDispatch();
  const comunidades = useSelector((state) => state.comunidades);
  useEffect(() => {
    dispatch(listComunidades());
  }, []);
  return <>

  </>
}