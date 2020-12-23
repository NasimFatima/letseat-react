import API from './axios';

export const POST = async (path, data) => {
  try {
    const res = await API.post(path, data);
    if (res) return res;
  } catch (err) {
    console.error('ERROR IN LOGIN FORM', err);
    return err;
  }
};
