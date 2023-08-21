import axios from 'axios';

export const url = 'https://api.mandarin.weniv.co.kr/';

export const instance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
});

export const accessInstance = axios.create({
  baseURL: url,
  headers: { 'Content-Type': 'application/json' },
});

export const imgInstance = axios.create({
  baseURL: url,
  headers: { 'Content-type': 'multipart/form-data' },
});
