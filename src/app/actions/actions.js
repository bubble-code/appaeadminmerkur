import { LIST_SALONES_COMUNIDAD, LIST_AVERIAS_SALON, LIST_CHECKLIST, CREATE_CHECKLIST, DELETE_CHECKLIST, ADD_SALON, LIST_COMUNIDAD } from './types';
import DataServices from '../../services/services'

export const listComunidades = () => async (dispatch) => {
  try {
    const res = await DataServices.getComunidades();
    dispatch({
      type: LIST_COMUNIDAD,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const listSalonesComunidad = (name) => {
  return async (dispatch) => {
    const res = await DataServices.getSalones(name);
    dispatch({
      type: LIST_SALONES_COMUNIDAD,
      payload: res.data
    });
  }
}
export const addSalonesComunidad = (values) => async (dispatch) => {
  try {
    const res = await DataServices.addSalon(values);
    dispatch({
      type: ADD_SALON,
      payload: res.data
    })
  } catch (error) {
    console.log(error);
  }
}


export const listAveriasSalon = (salon) => async (dispatch) => {
  try {
    const res = await DataServices.getAverias(salon);
    dispatch({
      type: LIST_AVERIAS_SALON,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
}
export const lisTareas = () => async (dispatch) => {
  try {
    const res = await DataServices.getChecklist();
    dispatch({
      type: LIST_CHECKLIST,
      payload: res.data,
    })
  } catch (error) {
    console.error(error)
  }
}

export const createCheckList = (data) => async (dispatch) => {
  // const { comunidad, prioridad, fecha, detalles } = data;
  // console.log({ comunidad, prioridad, fecha, detalles })
  try {
    const res = await DataServices.createCheckList(data);
    dispatch({
      type: CREATE_CHECKLIST,
      payload: res.data,
    })
  } catch (error) {
    console.error(error);
  }
}
// Delete CheckList
export const deleteCheckList = (id) => async (dispatch) => {
  try {
    await DataServices.deleteCheckList(id);
    dispatch({
      type: DELETE_CHECKLIST,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};