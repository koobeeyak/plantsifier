import Axios from 'axios/index';

const getEmployees = () => Axios({
  method: 'get',
  url: 'api/employees',
}).then(response => response.data);

export default getEmployees;
