import axios from 'axios';

const BASE_URL = 'https://avl-frontend-exam.herokuapp.com/api';

export const getFollowers = async () => {
  try {
    const resp = await axios.get(BASE_URL + '/users/all?page=1&pageSize=10');
    if (resp.status === 200) return resp.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getFollowing = async () => {
  try {
    const resp = await axios.get(
      BASE_URL + '/users/friends?page=1&pageSize=10'
    );
    if (resp.status === 200) return resp.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getTags = async () => {
  try {
    const resp = await axios.get(BASE_URL + '/tags');
    if (resp.status === 200) return resp.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getResult = async (
  page: string | number,
  pageSize: string | number,
  keyword: string
) => {
  try {
    const resp = await axios.get(
      BASE_URL +
        `/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    );
    if (resp.status === 200) return resp.data;
  } catch (err) {
    console.log(err);
    return;
  }
};
