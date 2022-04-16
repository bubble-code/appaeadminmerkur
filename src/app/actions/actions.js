import { LIST_SALONES_COMUNIDAD } from './types';
import DataServices from '../../services/services'

export const listSalonesComunidad = (name) => {
  return async (dispatch) => {
    const res = await DataServices.getSalones(name);
    dispatch({
      type: LIST_SALONES_COMUNIDAD,
      payload: res.data
    });
    // return Promise.resolve(res.data)   
  }
}