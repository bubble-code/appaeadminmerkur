import http from '../http-common';

class DataServices {

  getComunidades() {
    return http.get('/comunidades');
  }
  getSalones(name) {
    return http.get(`/listplayroom/${name}`);
  }
  addSalon(values) {
    return http.post('/listplayroom', values);
  }
  getAverias(salon) {
    return http.get(`/averias/${salon}`);
  }
  getChecklist() {
    return http.get("/checklist");
  }
  createCheckList(formValue) {
    return http.post(`/checklist`, formValue);
  }
  deleteCheckList(id) {
    return http.delete(`/checklist/${id}`);
  }
addDataRoulete(values) {
  return http.post('/dataRoulete', values);
}

}



export default new DataServices();