import http from '../http-common';

class DataServices {

  getSalones(name) {
    return http.get(`/listplayroom/${name}`);
  }
  getAverias(salon) {
    return http.get(`/averias/${salon}`);
  }
}



export default new DataServices();