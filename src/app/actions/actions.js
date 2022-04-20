import { LIST_SALONES_COMUNIDAD, LIST_AVERIAS_SALON, LIST_CHECKLIST } from './types';
import DataServices from '../../services/services'

export const listSalonesComunidad = (name) => {
  return async (dispatch) => {
    const res = await DataServices.getSalones(name);
    dispatch({
      type: LIST_SALONES_COMUNIDAD,
      payload: res.data
    });
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