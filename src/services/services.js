import http from '../http-common';

class DataServices {

  getSalones(name) {
    return http.get(`/listplayroom/${name}`);
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
}



export default new DataServices();