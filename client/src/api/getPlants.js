import Axios from 'axios/index';

const getPlants = () => Axios({
  method: 'get',
  url: 'api/plants'
}).then((response) => response.data);

export default getPlants;
