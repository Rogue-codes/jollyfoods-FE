/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { getAuthToken } from './auth';

const ApiFetcher = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*'
    },
})

const onRequest = (request: any) => {
    // const user = localStorage.getItem('token');
    const token = getAuthToken();
    request.headers.Authorization = token ? `Bearer ${token}` : '';
    return request;
}

const onRequestError = (error: any) => {
    return Promise.reject(error)
}

const onResponse = (response: any) => {
    return response;
}

const onResponseError = (error: any) => {
    // handle when the error does nit have a response
    if (!error.response)
        error.response = {
            status : 400
        }
    return Promise.reject(error)
}

ApiFetcher.interceptors.request.use(onRequest, onRequestError);
ApiFetcher.interceptors.response.use(onResponse, onResponseError);

export default ApiFetcher;