import API from './axios';

const post = async (path, data) => {
  try {
    const res = await API.post(path, data);
    if (res) return res;
  } catch (err) {
    console.error('ERROR IN POST SERVICE', err);
    return err;
  }
};

export const get = async (path) => {
  try {
    const res = await API.get(path);
    if (res) return res;
  } catch (err) {
    console.error('ERROR IN GET SERVICE', err);
    return err;
  }
};


export const request = (url, method = 'get', params = {}) => {


  API({
    method: method,
    url: url,
    data: params
  })
    .then(res => {
      // Auth.setUserToken(res.data.user_token)
      console.log("RES", res)
      return res
    })

}
