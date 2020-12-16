import { axiosInstance } from '../../Services/axios';

export const register = () => {
  axiosInstance
    .post('/users/registration/')
    .then((response) => { console.log(response.data) })
    .catch((err) => { console.log(err) })
}
