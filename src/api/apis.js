// api.js
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        accept: 'application/json,',
    }
});

export const apis = {
    // post
    get: () => api.get('/posts'),
    update: (data) => api.post('/posts', data) //update 시킬 함수 추가
}