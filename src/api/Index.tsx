import axios from 'axios';

const BASE_URL = 'https://avl-frontend-exam.herokuapp.com/api';

export const getFollowers = async (page: number) => {
  try {
    const resp = await axios.get(
      BASE_URL + `/users/all?page=${page}&pageSize=15`
    );
    if (resp.status === 200) return resp.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getFollowing = async (page: number) => {
  try {
    const resp = await axios.get(
      BASE_URL + `/users/friends?page=${page}&pageSize=15`
    );
    if (resp.status === 200) return resp.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const getTags = async () => {
  try {
    const resp = await axios.get(BASE_URL + '/tags?page=1&pageSize=15');
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
