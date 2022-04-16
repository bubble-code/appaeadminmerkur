import http from '../http-common';

class DataServices {

  getSalones(name) {
    return http.get(`/listplayroom/${name}`);
  }
}



export default new DataServices();